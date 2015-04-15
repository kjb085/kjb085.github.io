Date: 10/22/2014

Blog:
So I decided to do some research to flesh out exactly what the difference is between 3 aspects of an element in an HTML page. Each element is really made up of 4 parts. Those parts are the content, padding, border, and margin. The content is what I'm referring to when I say the element. This is of course the text, table, or whatever is actually occuring on the page. So the content and the border are pretty easily defined, but the margin and the padding are a little bit more ambiguous. As you can see in the picutre below, the padding is the space between the content and border. From there the margin is the space between the border and other elements or the edge of the page. This is all pretty simple, right? Well yes, but not every element has to have a border. ...so what happens with our margin. Well, it can still be there, but in this case the padding and the border are essentially the same thing. You can still include both, but they're effectively serving as a buffer between the other elements on the pages and the content. Additionally, you can make a transparent border and make it very thick to serve as a buffer between the content and other elements on the page, effectivelly creating a makeshift margin (but why would you). So really, there are three seperators between the content and everything else. The padding is simply the first seperator, the border is the second seperator (which is generally visible), and the margin is the last one. We just happen to name each of them based on a logical flow and what they should look like, but beyond that there's a relative degree of interchangability.