namespace SpriteKind {
    export const conversador = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    if (true) {
        tiles.placeOnRandomTile(mySprite, sprites.builtin.brick)
        tiles.setTilemap(tiles.createTilemap(hex`1000100007070707070708080808070707070707070707070708080808080702020204070707050507080808080807020202020707070707070808080808070702020207070808080808080808080707070707070808080808080808080807070707070708080808080808080808070707070707080808080808080808080808080808080808080808080808080808080808080808080808080809090909090908080808080808080808090909090909080808080704070707090909090909090707070707020202020909090908070601010707070202020409090909080701010107070703030303070808080807070707070707070707070708080808070707070707`, img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 . . . . 2 . . . . . . . . . 2 
            2 . . . . 2 . . . . 2 . . . . 2 
            2 . . . . 2 . . . . 2 . . . . 2 
            2 . . 2 2 2 . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . 2 2 2 2 2 2 2 
            2 . . . . . . . . . . . . . . . 
            2 . . . . . . . . . . . . . . . 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . 2 2 2 . . . . 2 2 . . 2 2 
            2 . . . . 2 . . . . 2 . . . . 2 
            2 . . . . 2 . . . . 2 . . . . 2 
            2 . . . . 2 . . . . 2 . . . . 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles0,sprites.dungeon.collectibleRedCrystal,myTiles.tile2,sprites.builtin.brick,sprites.castle.saplingOak,sprites.dungeon.hazardLava0,sprites.builtin.field0], TileScale.Sixteen))
    }
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(hex`10001000070707070707010101010707070707070708050508070101010107060606080707050b0b05070101010107060606060707080508050701010101070806060607070107070707010101010707070707070201010101010101010707070707070702010101010101010107070707070707020101010101010101010101010101030201010101010a01010101010101010302010101010101010107070707070707020101010101010101070707070707070708070707070101010107070707070707060606060701010101070905050807070606060807010101010705050508070707070707070101010107080808080707070707070704040404070707070707`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . 2 . . . . . . . . . 2 
    2 . . . . 2 . . . . 2 . . . . 2 
    2 . . . . 2 . . . . 2 . . . . 2 
    2 . . 2 2 2 . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . 2 2 2 2 2 2 2 
    2 . . . . . . . . . . . . . . . 
    2 . . . . . . . . . . . . . . . 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . 2 2 2 . . . . 2 2 . . 2 2 
    2 . . . . 2 . . . . 2 . . . . 2 
    2 . . . . 2 . . . . 2 . . . . 2 
    2 . . . . 2 . . . . 2 . . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles0,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.chestClosed,myTiles.tile1,myTiles.tile2], TileScale.Sixteen))
