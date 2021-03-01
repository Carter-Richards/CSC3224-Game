gdjs.DeadCode = {};
gdjs.DeadCode.GDNewObjectObjects1= [];
gdjs.DeadCode.GDNewObjectObjects2= [];
gdjs.DeadCode.GDBackgroundObjects1= [];
gdjs.DeadCode.GDBackgroundObjects2= [];

gdjs.DeadCode.conditionTrue_0 = {val:false};
gdjs.DeadCode.condition0IsTrue_0 = {val:false};
gdjs.DeadCode.condition1IsTrue_0 = {val:false};


gdjs.DeadCode.eventsList0 = function(runtimeScene) {

{


gdjs.DeadCode.condition0IsTrue_0.val = false;
{
gdjs.DeadCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}if (gdjs.DeadCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};

gdjs.DeadCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DeadCode.GDNewObjectObjects1.length = 0;
gdjs.DeadCode.GDNewObjectObjects2.length = 0;
gdjs.DeadCode.GDBackgroundObjects1.length = 0;
gdjs.DeadCode.GDBackgroundObjects2.length = 0;

gdjs.DeadCode.eventsList0(runtimeScene);
return;

}

gdjs['DeadCode'] = gdjs.DeadCode;
