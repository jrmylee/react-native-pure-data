#import "PureData.h"

#import "PdBase.h"
#import "PdAudioController.h"
#import "PdFile.h"
#import "PdDispatcher.h"

@implementation PureData

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(sampleMethod:(NSString *)stringArgument numberParameter:(nonnull NSNumber *)numberArgument callback:(RCTResponseSenderBlock)callback)
{

    self.audioControllers = [[NSMutableDictionary alloc]initWithCapacity:10];
    [self.audioControllers setObject:[[PdAudioController alloc] init] forKey:@"hello"];

    PdAudioController* pd = [self.audioControllers objectForKey:@"hello"];
    
    PdAudioStatus status = [pd configurePlaybackWithSampleRate:44100
                                                   numberChannels:2
                                                     inputEnabled:NO
                                                    mixingEnabled:NO];
  if (status == PdAudioError) {
    NSLog(@"native PD Error! Could not configure PdAudioController");
  } else if (status == PdAudioPropertyChanged) {
    NSLog(@"native PD Warning: some of the audio parameters inwere not accceptable.");
  } else {
    NSLog(@"native PD Audio Configuration successful.");
  }

  pd.active = YES;

  void* patch = [PdBase openFile:@"osc.pd" path:[[NSBundle mainBundle]resourcePath]];

  if (!patch) {
    NSLog(@"failed to open patch");
  } else {
    NSLog(@"succeeded");
  }

  // messages must be floats
  float yn = (float)YES;
  [PdBase sendFloat:yn toReceiver:@"onOff"];

  // TODO: Implement some actually useful functionality
  callback(@[[NSString stringWithFormat: @"numberArgument: %@ stringArgument: %@", numberArgument, stringArgument]]);
}

@end
