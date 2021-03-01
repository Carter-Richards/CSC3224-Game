gdjs.StartscreenCode = {};
gdjs.StartscreenCode.GDWelcomeObjects1= [];
gdjs.StartscreenCode.GDWelcomeObjects2= [];
gdjs.StartscreenCode.GDBackgroundObjects1= [];
gdjs.StartscreenCode.GDBackgroundObjects2= [];

gdjs.StartscreenCode.conditionTrue_0 = {val:false};
gdjs.StartscreenCode.condition0IsTrue_0 = {val:false};
gdjs.StartscreenCode.condition1IsTrue_0 = {val:false};


gdjs.StartscreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.StartscreenCode.condition0IsTrue_0.val = false;
{
gdjs.StartscreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.StartscreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};

gdjs.StartscreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartscreenCode.GDWelcomeObjects1.length = 0;
gdjs.StartscreenCode.GDWelcomeObjects2.length = 0;
gdjs.StartscreenCode.GDBackgroundObjects1.length = 0;
gdjs.StartscreenCode.GDBackgroundObjects2.length = 0;

gdjs.StartscreenCode.eventsList0(runtimeScene);
return;

}

gdjs['StartscreenCode'] = gdjs.StartscreenCode;
