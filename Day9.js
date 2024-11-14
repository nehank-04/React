//Navbar.js
import React from 'react';
import {Link} from 'react-router-dom';
function Navbar()
{
    return(
        <nav>
            <h2>Music world</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/singers">Singers</Link>
                </li>
                <li>
                    <Link to="/albums">Albums</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;

//Singer.js
import React from 'react';
function Singers()
{
    const singersList = [
        { name: 'Elvis Presley', year: 1954 },
        { name: 'Michael Jackson', year: 1971 },
        { name: 'Madonna', year: 1982 },
        { name: 'Freddie Mercury', year: 1970 },
      ];
return(
    <div>
<h2>Singers</h2>
<ul>
    {singersList.map((singer,index)=>(
    <li key={index}>
{singer.name}- Active since 
{singer.year}
</li>
    ))}
</ul>
</div>
)
}
export default Singers;

//albumList.js
import React from 'react';
function Singers()
{
    const singersList = [
        { name: 'Elvis Presley', year: 1954 },
        { name: 'Michael Jackson', year: 1971 },
        { name: 'Madonna', year: 1982 },
        { name: 'Freddie Mercury', year: 1970 },
      ];
return(
    <div>
<h2>Singers</h2>
<ul>
    {singersList.map((singer,index)=>(
    <li key={index}>
{singer.name}- Active since 
{singer.year}
</li>
    ))}
</ul>
</div>
)
}
export default Singers;

//home2.js

import React from 'react';
function Home()
{
return(
    <div>
        <h1>Welcome to music world</h1>
    </div>
)
}
export default Home;
