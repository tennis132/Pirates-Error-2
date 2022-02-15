class CannonBall
{
    contructor(a,b)
    {
        this.x = a 
        this.y = b
        this.r = 35

        var options =
        {
            friction: 0,
            isStatic: false, 
        }

        this.body = Bodies.circle(a,b,35,options)

        World.add(world, this.body)

    }


    display()
    {
        var pos = this.body.position

        push()
        ellipse(pos.x, pos.y, this.r, this.r)
        pop()

    }

}