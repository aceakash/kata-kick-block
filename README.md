kata-kick-block
=======================

Kata: http://www.codewars.com/kata/528aa29bd8a0399fc5000cae


Description:

Create a darkroom function that when first called takes an integer (no need to protect yourself in this kata), this is the master screaming where the kick is going to come from (or possibly to tell the attacker where to kick from, no one really knows). Then a 1 will be used as an argument to one of the chaining function calls, this is to indicate which direction the student blocks. If the 1 was inserted into the right function call, 'BLOCK' should be returned for an .end function call, all other blocks should return "KICK":

```javascript
darkRoom(2)()(1)()()()()()().end() -> 'BLOCK'
darkRoom(3)()()(1)()()()()().end() -> 'BLOCK'
darkRoom(2)(1)()()()()()()().end() -> 'KICK'
darkRoom(2)()()(1)()()()()().end() -> 'KICK'
darkRoom(2)()()()()()()()().end() -> 'KICK'
```

I know I said you would not have to protect yourself in this kata, but as all great tutors I lied. You must protect yourself against cheating students that try to block in more than one direction at a time, even if they blocked, they deserve a kick for cheating.

```javascript
darkRoom(2)(1)(1)()()()()()().end() -> 'KICK'
darkRoom(2)()(1)(1)()()()()().end() -> 'KICK'
darkRoom(2)(1)(1)(1)(1)(1)(1)(1)(1).end() -> 'KICK'
```

As we all know there are endless directions that you can be attacked from so you must be able to continue calling the chain for however long.

Good luck Grasshopper
