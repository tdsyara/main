let removeMines = false

RemoveMines.process = function (localPlayer)
{
    if (!localPlayer)
    {
        return;
    }

    let world = GameObjects.getWorld();

    if (!world)
    {
        return;
    }

    let mines = GameObjects.getMines();

    if (!mines)
    {
        return;
    }
    if(removeMines) {

    var n;
    for (n = mines.minesByUser_0.keys.iterator(); n.hasNext();)
    {
        var o = n.next();
        mines.removeAllMines_0(o)
    }
    }
    else return
}


document.addEventListener('keyup', (e) =>
{
    if (e.keyCode == 118 && Utils.isGameReady() && Utils.isNotOpenChat())
    {
        removeMines = !removeMines;
    }
})
