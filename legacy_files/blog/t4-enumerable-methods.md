Date: 10/2/2014

Post: In ruby, there's a really useful set of tools called enumerable methods. The reason they're so helpful is that they help you operate on an array or a hash to do a sequence on each of the items in the object it's called on. As such, the rubist must realize that an enumerable is more or less an extension of the each method, with specific purposes. Specifically one of my favorite enumerable methods is map. What map allows the rubist to do is the supply a block of code and manipulate the the contents of the object and then return a new array based on what was mapped. For instance using a map with a block saying to multiply the item by itself might look like this:

`(1..4).map { |x| x * x }`

And the output of this method would be:

`[1, 4, 9, 16]`

As you can see, our method called the contents of 1 through 4 to individually multiply by themselves. Therefore the array output gave us the squared value of each of each number 1 through 4. Pretty cool, huh? I think so and as you might imagine this type of method could be very useful when coding.