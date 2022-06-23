class commons{
getRoot = null
getReactRoot = null
searchObject = null
getRandom = null
}


class game{
getTank = null
getWorld = null

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


 function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}



commons.getRoot = function(){
root = document.querySelector("#root")
return root
}

commons.getReactRoot = function(){
return root._reactRootContainer._internalRoot.current.memoizedState.element.type.prototype.store.subscribers.array_hd7ov6$_0

}



commons.getRandom = function(min,max){
return Math.floor(Math.random() * (max - min + 1) + min)


}


game.getTank = function(){
return commons.searchObject(commons.getReactRoot(),"tank").tank




}

game.getWorld = function(){
return game.getTank().world

}


window.mineDecluster= function(){
for(let i=0;i<game.getWorld().triggers_0.triggers_0.array.length;i++){

try {
parentMine = game.getWorld().triggers_0.triggers_0.array[i]

childMine = game.getWorld().triggers_0.triggers_0.array[i+1]

if(childMine.position.x == parentMine.position.x || childMine.position.y == parentMine.position.y || childMine.position.z > parentMine.position.z ){

childMine.removeMine_0()


}


} catch (error) {

}



}

}
document.addEventListener("keydown",function(e){

if(e.key == "F7"){

mineDecluster()

}




})
