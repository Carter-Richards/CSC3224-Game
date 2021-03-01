gdjs.EndCode = {};
gdjs.EndCode.GDWelcomeObjects1= [];
gdjs.EndCode.GDWelcomeObjects2= [];
gdjs.EndCode.GDBackgroundObjects1= [];
gdjs.EndCode.GDBackgroundObjects2= [];

gdjs.EndCode.conditionTrue_0 = {val:false};
gdjs.EndCode.condition0IsTrue_0 = {val:false};
gdjs.EndCode.condition1IsTrue_0 = {val:false};


gdjs.EndCode.eventsList0 = function(runtimeScene) {

{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.EndCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Startscreen", false);
}}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDWelcomeObjects1.length = 0;
gdjs.EndCode.GDWelcomeObjects2.length = 0;
gdjs.EndCode.GDBackgroundObjects1.length = 0;
gdjs.EndCode.GDBackgroundObjects2.length = 0;

gdjs.EndCode.eventsList0(runtimeScene);
return;

}

gdjs['EndCode'] = gdjs.EndCode;
