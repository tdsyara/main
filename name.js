class commons{
getRoot = null
getReactRoot = null
getChatState = null
searchObject = null
}


class game{
getTankPhysics = null
getTank = null
getWorld = null
getMines = null
getFlags = null
getPlayers = null
getMapBoundary = null
getBattleState = null
getSupplies = null
getHealth = null
getStriker = null
getCamera = null
}


class hacks{
airWalk = null
mines = null
repairs = null
supplies = null
laser = null
rapidUpdate = null
flagTP = null
spawnRockets = null
oneHitKill = null
noLaser = null
autoHeal = null
simpleTP = null
playerTP = null


}


class vars{
repair = null
DD = null


}



commons.searchObject = function(object,item){
try {
for(let i=0; i<object.length;i++){
if(object[i].hasOwnProperty(item))
return object[i]

}
} catch (error) {

}
}
commons.getRoot = function(){
root = document.querySelector("#root")
return root
}

commons.getReactRoot = function(){
return root._reactRootContainer._internalRoot.current.memoizedState.element.type.prototype.store.subscribers.array_hd7ov6$_0

}


game.getTank = function(){
return commons.searchObject(commons.getReactRoot(),"tank").tank




}

game.getWorld = function(){
return game.getTank().world

}

game.getMines = function(){
return game.getWorld().entities_0.array_hd7ov6$_0.at(0).components_0.array.at(15);



}

game.getMapBoundary = function(){
return game.getWorld().entities_0.array_hd7ov6$_0.at(0).components_0.array.at(0).bounds
}


game.getPlayers = function(){
return game.getWorld().physicsScene_0.bodies_0.array_hd7ov6$_0



}
game.getBattleState = function(){

return commons.getReactRoot().at(1).state.inBattle
}

game.isNotOpenChat = function ()
{
    return (document.getElementsByClassName("sc-bwzfXH iokmvL").item(0) == null);
}

game.getStriker = function(){
for(let i=0; i>game.getTank().components_0.array.length;i++){
if(game.getTank().components_0.array[i].hasOwnProperty("strikerWeapon_jjsiik$_0")){
return game.getTank().components_0.array[i]


}
}
}


game.getHealth = function(){
return game.getTank().components_0.array[1].isFullHealth()


}

game.getTankPhysics = function(){
return game.getTank().components_0.array[5].tankPhysicsComponent_tczrao$_0



}

game.getCamera = function(){
for (let i = 0; i < game.getTank().components_0.array.length; i++)
  {
    if(game.getTank().components_0.array[i].hasOwnProperty("followCamera_w8ai3w$_0"))
    return game.getTank().components_0.array[i].followCamera_0.currState_0

  }
}


game.getSupplies = function(supply){
try {
for(key in game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0){
if(game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[key].key_5xhq3d$_0.name$ == supply){
return key
}


}
} catch (error) {

}


}

function getSupplyArrays(){
try {
window.mines = game.getSupplies("MINE")
window.repairs = game.getSupplies("FIRST_AID")
window.DA = game.getSupplies("DOUBLE_ARMOR")
window.DD = game.getSupplies("DOUBLE_DAMAGE")
window.NITRO = game.getSupplies("NITRO")

} catch (error) {

}
}

supps = setInterval(getSupplyArrays,500)

hacks.autoHeal = function(){
try {
if(game.getHealth()==false){
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[mines]._value_0._value_0.onUserActivatedSupply()
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[repairs]._value_0._value_0.onUserActivatedSupply()


}

} catch (error) {

}


}



hacks.mines = function()
{
try {
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[mines]._value_0._value_0.onUserActivatedSupply()
} catch (error) {

}


}




hacks.repairs = function()
{
try {
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[repairs]._value_0._value_0.onUserActivatedSupply()
} catch (error) {

}


}



hacks.supplies = function(){
try {

game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[DD]._value_0._value_0.onUserActivatedSupply()
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[DA]._value_0._value_0.onUserActivatedSupply()
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[NITRO]._value_0._value_0.onUserActivatedSupply()

} catch (error) {

}


}



hacks.rapidUpdate = function(){

try {
   game.getTank().components_0.array[37].needImmediateUpdate_0 = true
} catch (error) {

 }}


game.getLaser = function(){

return commons.searchObject(game.getTank().components_0.array,"laserDirectionMessage_0")

}



hacks.noLaser = function(){
try {
game.getLaser().turnOffLaser_0()

} catch (error) {

}

}


function dcm(){
for(let i=0;i<16;i++){
for(let j=0;j<game.getWorld().triggers_0.triggers_0.array.length;j++){
try {
if(i<16){
parentMine = game.getWorld().triggers_0.triggers_0.array[j]
childMine = game.getWorld().triggers_0.triggers_0.array[j+1]

if(parentMine.position.x==childMine.position.x){


childMine.removeMine_0()

}


}
} catch (error) {

}

}
}

}

root = document.querySelector("#root")
stateWindow = document.createElement("div")
stateWindow_style={
    display: "flex",
    backgroundColor: "rgb(12 12 12 / 28%)",
    height:"40%",
    width:"10%",
    position:"absolute",
    right:"20%",
    transform:"translate(-50%,-50%)",
    borderRadius:"20px",
    borderBottom:"1px solid black",
    borderLeft:"1px solid black",
    borderTop:"1px solid black",
    borderRight:"1px solid black",
    borderWidth:"3px",
    top: "35%",
    backdropFilter: "5px blur"

}
stateWindow.style.outline = "2px solid red"
//Object.assign():
Object.assign(stateWindow.style,stateWindow_style);
root.appendChild(stateWindow)

function draggable(el) {
  el.addEventListener('mousedown', function(e) {
    var offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
    var offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);

    function mouseMoveHandler(e) {
      el.style.top = (e.clientY - offsetY) + 'px';
      el.style.left = (e.clientX - offsetX) + 'px';
    }

    function reset() {
      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('mouseup', reset);
    }

    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('mouseup', reset);
  });
}

draggable(stateWindow)


title = document.createElement("span")
title.innerText = "ThunderStorm"
stateWindow.appendChild(title)

title_style = {

color:"white",
textAlign:"center",
fontSize : "25px",
padding: "20px 15%",
fontWeight: "1000"





}



Object.assign(title.style,title_style)




Sairwal = document.createElement("span")
Sairwalk = document.createElement("span")
Sautoclick = document.createElement("span")
Supdate = document.createElement("span")
Slaser = document.createElement("span")
Sfps = document.createElement("span")
Sheal = document.createElement("span")


label_style = {
position:"absolute",
fontSize:"18px",
padding:"20px 10%",
color:"white",
fontWeight: "1000"
}

Object.assign(Sautoclick.style,label_style)
Object.assign(Sairwalk.style,label_style)
Object.assign(Sairwal.style,label_style)
Object.assign(Supdate.style,label_style)
Object.assign(Slaser.style,label_style)
Object.assign(Sfps.style,label_style)
Object.assign(Sheal.style,label_style)


Sairwal.innerText = "Repairs:"
Sairwalk.innerText = "Supplies:"
Sautoclick.innerText = "Mines:"
Supdate.innerText = "Rapid Update:"
Slaser.innerText = "No Laser:"
Sfps.innerText = "FPS Hack:"
Sheal.innerText = "Auto Heal:"


Sairwal.style.bottom = "76%"
Sairwalk.style.bottom = "64%"
Sautoclick.style.bottom = "52%"
Supdate.style.bottom = "40%"
Slaser.style.bottom = "28%"
Sfps.style.bottom = "16%"
Sheal.style.bottom = "4%"



stateWindow.appendChild(Sairwal)
stateWindow.appendChild(Sairwalk)
stateWindow.appendChild(Sautoclick)
stateWindow.appendChild(Supdate)
stateWindow.appendChild(Slaser)
stateWindow.appendChild(Sfps)
stateWindow.appendChild(Sheal)


onOff_style = {
position:"absolute",
fontSize:"18px",
padding:"20px 10%",
color:"red",
right:"0%",
fontWeight: "1000"

}


State1 = document.createElement("span")
State2 = document.createElement("span")
State3 = document.createElement("span")
State4 = document.createElement("span")
State5 = document.createElement("span")
State6 = document.createElement("span")
State7 = document.createElement("span")




Object.assign(State1.style,onOff_style)
Object.assign(State2.style,onOff_style)
Object.assign(State3.style,onOff_style)
Object.assign(State4.style,onOff_style)
Object.assign(State5.style,onOff_style)
Object.assign(State6.style,onOff_style)
Object.assign(State7.style,onOff_style)




State1.innerText = "OFF"
State2.innerText = "OFF"
State3.innerText = "OFF"
State4.innerText = "OFF"
State5.innerText = "OFF"
State6.innerText = "OFF"
State7.innerText = "OFF"


stateWindow.appendChild(State1)
stateWindow.appendChild(State2)
stateWindow.appendChild(State3)
stateWindow.appendChild(State4)
stateWindow.appendChild(State5)
stateWindow.appendChild(State6)
stateWindow.appendChild(State7)



State1.style.bottom = "76%"
State2.style.bottom = "64%"
State3.style.bottom = "52%"
State4.style.bottom = "40%"
State5.style.bottom = "28%"
State6.style.bottom = "16%"
State7.style.bottom = "4%"



s1p = 0
s2p = 0
s3p = 0
s4p = 0
s5p = 0
s7p = 0



document.addEventListener('keydown', (e) => { if (e.keyCode === 35 && game.isNotOpenChat()){
s3p+=1
if(s3p%2==1){
State3.innerText = "ON"
State3.style.color = "#00D000"
window.m = setInterval(hacks.mines)


}

if(s3p%2==0){
clearInterval(window.m)
State3.innerText = "OFF"
State3.style.color = "#FF0000"
}







}})





document.addEventListener('keydown', (e) => { if (e.keyCode === 45 && game.isNotOpenChat()){
s2p+=1
if(s2p%2==1){
State2.innerText = "ON"
State2.style.color = "#00D000"
window.s = setInterval(hacks.supplies,150)


}

if(s2p%2==0){
clearInterval(window.s)
State2.innerText = "OFF"
State2.style.color = "#FF0000"
}







}})






document.addEventListener('keydown', (e) => { if (e.keyCode === 120 && game.isNotOpenChat()){
s4p+=1
if(s4p%2==1){
State4.innerText = "ON"
State4.style.color = "#00D000"
window.ru = setInterval(hacks.rapidUpdate,0)


}

if(s4p%2==0){

clearInterval(window.ru)
State4.innerText = "OFF"
State4.style.color = "#FF0000"
}







}})





document.addEventListener('keydown', (e) => { if (e.keyCode === 36&& game.isNotOpenChat()){
s1p+=1
if(s1p%2==1){
State1.innerText = "ON"
State1.style.color = "#00D000"
window.r = setInterval(hacks.repairs,0)


}

if(s1p%2==0){

clearInterval(window.r)
State1.innerText = "OFF"
State1.style.color = "#FF0000"
}







}})



document.addEventListener('keydown', (e) => { if (e.keyCode === 98 && game.isNotOpenChat()){
s5p+=1
if(s5p%2==1){
State5.innerText = "ON"
State5.style.color = "#00D000"
window.nl = setInterval(hacks.noLaser,25)


}

if(s5p%2==0){

clearInterval(window.nl)
State5.innerText = "OFF"
State5.style.color = "#FF0000"
}







}})

document.addEventListener('keydown', (e) => { if (e.keyCode === 77 && game.isNotOpenChat()){

State6.innerText = "ON"
State6.style.color = "#00D000"
dcm()

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

delay(700).then(() =>
State6.innerText = "OFF");

}
function delay1(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

delay(700).then(() =>
State6.style.color = "#FF0000");

}








)

document.addEventListener('keydown', (e) => { if (e.keyCode === 97 && game.isNotOpenChat()){
s7p+=1
if(s7p%2==1){
State7.innerText = "ON"
State7.style.color = "#00D000"
window.ah = setInterval(hacks.autoHeal,1)


}

if(s7p%2==0){
clearInterval(window.ah)
State7.innerText = "OFF"
State7.style.color = "#FF0000"
}







}})

WpressCount = 0
document.addEventListener('keydown', (e) => { if (e.keyCode ===103 && game.isNotOpenChat()){
WpressCount ++
if(WpressCount%2==1){
root.appendChild(stateWindow)


}

if(WpressCount%2==0){

root.removeChild(stateWindow)

}


}})

console.clear();
