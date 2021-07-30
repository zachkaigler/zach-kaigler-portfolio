(this["webpackJsonpzach-kaigler-portfolio"]=this["webpackJsonpzach-kaigler-portfolio"]||[]).push([[0],{48:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c(13),a=c.n(n),i=(c(47),c(48),c(3)),A=c(12),o=c.p+"static/media/selfie.05bc7275.jpg",l=c.p+"static/media/mustache.1de7f5ac.gif",r=c.p+"static/media/js.7d826419.png",d=c.p+"static/media/react.a9c8dc54.png",g=c.p+"static/media/ruby.ac38569d.png",j=c.p+"static/media/rails.b69dfd3e.png",b=c.p+"static/media/semantic.5a8f95c5.png",m=c.p+"static/media/html.ee3f100b.png",h=c.p+"static/media/css.a72e08f1.png",u=c.p+"static/media/ps.31ba7fc3.png",f=c.p+"static/media/ae.10d3a9e7.png",O=c.p+"static/media/node.d9f3d6b5.png",p=c.p+"static/media/redux.66a5ba55.png",k=c.p+"static/media/sass.03a7b838.png",v=c.p+"static/media/express.bb82e696.png",B=c(1);var x=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(B.jsx)("section",{id:"about",children:Object(B.jsx)("div",{className:"section",children:Object(B.jsxs)("div",{className:"about-me",children:[Object(B.jsxs)("div",{className:"bio-container",children:[Object(B.jsxs)("div",{className:"selfie-container",onClick:function(){return n(!0)},children:[Object(B.jsx)("img",{src:o,alt:"me",className:"selfie"}),c?Object(B.jsx)("img",{src:l,alt:"mustache",className:"mustache"}):null]}),Object(B.jsxs)("div",{className:"bio",children:[Object(B.jsx)("h1",{children:"This Guy"}),Object(B.jsx)("p",{children:"Hello friends! My name is Zach Kaigler, and I\u2019m a full stack software engineer based in Brooklyn. With a background in film and advertising post production, I possess a keen eye for design, a flexible and technical skillset honed over countless hours of on-the-job learning, and years of experience in client based work environments."}),Object(B.jsxs)("p",{children:["A graduate of Flatiron School\u2019s Software Engineering program, I seek to work on engaging projects in collaborative and friendly environments. ",Object(B.jsx)(A.Link,{to:"contact",className:"inline-link",smooth:!0,duration:1e3,children:"Interested?"})]})]})]}),Object(B.jsxs)("div",{className:"tools",children:[Object(B.jsx)("h3",{children:"Tools I Use"}),Object(B.jsxs)("div",{className:"tools-icons",children:[Object(B.jsx)("img",{src:r,alt:"js",title:"JavaScript"}),Object(B.jsx)("img",{src:d,alt:"react",title:"React"}),Object(B.jsx)("img",{src:p,alt:"redux",title:"Redux"}),Object(B.jsx)("img",{src:O,alt:"node",title:"Node.js"}),Object(B.jsx)("img",{src:v,alt:"express",title:"Express"}),Object(B.jsx)("img",{src:g,alt:"ruby",title:"Ruby"}),Object(B.jsx)("img",{src:j,alt:"rails",title:"Rails"}),Object(B.jsx)("img",{src:k,alt:"sass",title:"Sass"}),Object(B.jsx)("img",{src:m,alt:"html",title:"HTML"}),Object(B.jsx)("img",{src:h,alt:"css",title:"CSS"}),Object(B.jsx)("img",{src:b,alt:"semantic",title:"Semantic UI React"}),Object(B.jsx)("img",{src:u,alt:"photoshop",title:"Adobe Photoshop"}),Object(B.jsx)("img",{src:f,alt:"aftereffects",title:"Adobe AfterEffects"})]})]})]})})})},Q=c(10);var I=function(e){var t=e.title,c=e.image,s=e.url,n=e.date,a=e.content,i=0,A=new RegExp(/[^\w\s]|_/g),o=a.split("<p>")[1].split(" ").map((function(e){return i<30?(i+=1,e):30===i?(i+=1,A.test(e[e.length-1])?"".concat(e.split("").slice(0,-1).join(""),"..."):"".concat(e,"...")):null})).join(" ");return Object(B.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",className:"blog-card-a",children:Object(B.jsxs)("div",{className:"blog-card",children:[Object(B.jsx)("h3",{children:t}),Object(B.jsx)("img",{src:c,alt:"thumbnail"}),Object(B.jsx)("p",{className:"blog-date",children:n}),Object(B.jsx)("p",{className:"blog-blurb",children:o})]})})},N=c(42),y=c.n(N);var J=function(){var e,t=Object(s.useState)([]),c=Object(i.a)(t,2),n=c[0],a=c[1],A=Object(s.useState)(!1),o=Object(i.a)(A,2),l=o[0],r=o[1],d=Object(s.useState)(!1),g=Object(i.a)(d,2),j=g[0],b=g[1];return Object(s.useEffect)((function(){fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40zachkaigler&api_key=jvucslukdc1fzxrukznmegrpqo1imimzy921eykk").then((function(e){return e.json()})).then((function(e){"ok"===e.status?(a(Object(Q.a)(e.items)),b(!0)):(r(!0),b(!0))}))}),[]),j?(e=l?Object(B.jsx)("p",{children:"Huh, looks like we had a problem loading these."}):n.map((function(e){return n.indexOf(e)<=2?Object(B.jsx)(I,{title:e.title,image:e.thumbnail,url:e.link,date:e.pubDate,content:e.content},y()()):null})),Object(B.jsx)("section",{id:"blogs",children:Object(B.jsx)("div",{className:"section",children:Object(B.jsxs)("div",{className:"blogs",children:[Object(B.jsx)("div",{className:"blogs-list",children:e}),Object(B.jsxs)("p",{children:["Read more on ",Object(B.jsx)("a",{href:"https://zachkaigler.medium.com/",className:"inline-link",target:"_blank",rel:"noreferrer",children:"Medium"}),"."]})]})})})):Object(B.jsx)("section",{id:"blogs",children:Object(B.jsx)("div",{className:"section",children:Object(B.jsx)("div",{className:"blogs"})})})},D=c.p+"static/media/kaigler_resume_SE_2021.480169e3.pdf",S=c.p+"static/media/github.af3f3b62.png",G=c.p+"static/media/ig.72070ebc.png";var w=function(){return Object(B.jsx)("section",{id:"contact",children:Object(B.jsx)("div",{className:"section",children:Object(B.jsxs)("div",{className:"contact",children:[Object(B.jsx)("h1",{children:"Want to know more?"}),Object(B.jsxs)("span",{children:["Feel free to ",Object(B.jsx)("a",{href:D,target:"_blank",rel:"noreferrer",className:"inline-link",children:"peep the resume"})," or ",Object(B.jsx)("a",{href:"mailto: zjkaig@gmail.com",className:"inline-link",children:"shoot me an email"}),"."]}),Object(B.jsxs)("div",{className:"socials",children:[Object(B.jsx)("span",{children:"You can also find me on any of these fine platforms:"}),Object(B.jsxs)("div",{className:"social-icons",children:[Object(B.jsx)("a",{href:"https://github.com/zachkaigler",target:"_blank",rel:"noreferrer",children:Object(B.jsx)("img",{src:S,alt:"github"})}),Object(B.jsx)("a",{href:"https://www.linkedin.com/in/zachkaigler/",target:"_blank",rel:"noreferrer",children:Object(B.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAd0UlEQVR4nO3dCbiu12Av8P/JOYlMREbEECQRpJEWMU81XEVxzWOMRQ3trdZwuVWKW0VcdXFdV1HU2BCkpppCQwlJDA0SiSEhQgYiJCcn55x9n1Xr1Hacvfc3f++7vt/ved4nO2fYe71rfef7f2u9awgAAAAAADAJ67Z9jxe/+MWzqNBdkjw0yVWS/GGSWyVZqhcA9N26mmlvT3Jakl2TfDbJKdO+rw1T/v7bPjDcPcn9k1y1/nf9lH8uAMzT05b97BLsn0vy4ySvSnLhNMo1rUAvPfGDkzw3ybWTHJbk6lP6WQDQZYfXq7hXkvcleXOScydZ5kkHevl+N0vymCT3TXKNCX9/AOizmya5SZLHJnllkk8kOX0S9zPJQC/D689I8pdJ9pjg9wWAlmyoo9ivSXJGklcn+fi4wT6pQH9AkvvUCW+7NFXtADA9N6iBXibNPao+bx/JuIG+Z5L/Wj9l7KXBAWAkZSj+uDoj/nlJfjTsNxkn0O+c5KVJbliDHQAY3aH1KvPPHp/kvGG+004j/tgS5m9KcnNhDgATdc8kbxx2ddgogX6nOt3+IO0HAFNxz5q1A4f6sIF+lyRvS3Id7QcAU/UHdTT8wEF+yKCBvlP9xm9Nci3tBwAzcY8k/5Dkmmv9sEEDfe8k/2vQTwkAwMTcbZBQHzTQH5jkutoGAObirnWUfMX5a2sFevn9JyU5Jslu2hAA5qasMLvdSj98rUC/fx1qtzQNAObv2Uluvfz4821WC/S96sP43TUgAHTCEUn+bkdnpqwW6EfVfWUBgO44rB7DOlCgH5DkCVM8Lx0AGE0ZQf8/SR6y/G/vKND3rCe/PFhFA0An7VM3e/tPOwr0pTpGDwB011WT7LtaoN8hyZU1IAB02v2WP0vfUaA/zfauANB5ZZ7bw7dt/LZ9oD86yS20IQD0wt2THJwdBHpZqrafNgSAXliq56xs2D7QL9J+ANAbZce4FyS50fJAv3GSO2lDAOiVstx8aXmg375eAEB/bC6P0JcH+iaNBwC9U3Z3fc3yQP+lNgSA3inL145cHuh30YYA0EuXLQ/0h2pDAOin5YF+uTYEgH5a7Tx0AKAnBDoANECgA0ADBDoANECgA0ADBDoANECgA0ADBDoANECgA0ADBDoANECgA0ADBDoANECgA0ADBDoANECgA0ADBDoANECgA0ADBDoANECgA0ADBDoANECgA0ADBDoANECgA0ADBDoANECgA0ADBDoANECgA0ADBDoANECgA0ADBDoANECgA0ADBDoANECgA0ADBDoANGCDRuyNS5NcVAv78yRb6rXNTvXaM8nO9Tpg0SsNYFEI9O76Qb0uSHJJkhOSnFJLe3YN86V6ZdloyzVqqF85yR2SHJLkmkn2rl/vuugVC9Aigd4t303yuSRn1QD/RpILt+uJr+XCZb//8frffZPsn+SWSY5Kcq0kd0xy1QWsY4AmCfT5K8Pnn0zykSRfSfLVJJsmXKoL6/WtJG9JsleS2ye5aQ35u9UhegB6SqDPzw+THJvkX5L8W5KfzrAkFyf553qVnvttkzw+ya2S7Ne1igJgbQJ99r6f5IM1zE9KsnHO5Tk/yfuTfDrJzZM8LMn96zN3AHpCoM9OGVp/d5I31WH1yzpWvovr0P+JST6c5OFJ7mMoHqAfBPpslOfjr0vyqSS/7HhZL0/yvvoo4OlJjk5yaAfKBcAqbCwzXeW5+P9N8pQkx/cgzJf7RZKXJHlgkncOOdMegBnTQ5+eryX56zp8Pe/n5KPaXO/j6XUS36NsVgPQTXro0/GZJI+pQ9d9DfPlfpzkb5M8sa6TB6BjBPpklR7tcUmemuTUlm6srmP/QF3e9qkOlAeAZQT65GypS9GeneS0Vm5qB06vcwI+1rmSASwwgT4ZpWf+niQvSPLtFm5oDSXUn5bko50uJcACEejju6KuL39BDbpFcWaSP1m2XzwAcyTQx1e2T31+kjP6fiMjOLMOvwt1gDkT6OMps9mfV09HW1Ql1J+V5N8XuA4A5k6gj+6U2jtteQLcoE6rp7j1aeMcgKYI9NFcXneA+0YfCz8FZR7BG2uo21EOYA4E+mj+sa7J5td+WucSeJ4OMAcCfXjlmNEXJvlJ3wo+AxckeXM9WQ6AGRLow7mkrjc/u0+FnrFyCM1rFuqOATpAoA+nLFF7R58KPAeX1aNXF2lNPsDcCfTBnZfkQ4aTB3JinSQHwIwI9MGdlOSDfSnsnG2ph9R8ZaFrAWCGBPpgyvGhb0hyaR8K2xFlw5l3WsYGMBsCfTBlF7QvCaehfWBBt8QFmDmBvray+9lbk5zf9YJ20Hn1UcXWRa8IgGkT6Gsrw+1fEEojuTjJ25Jc1MOyA/SKQF/d1voc+MwuF7LjvmHdPsD0CfTVlT3Kv6p3Ppbz6vr9pR7fA0DnCfTVfc9pamMrQf65JBt7fh8AnSbQV/fpBT/rfFLKrnHntnErAN0k0Ff31XpUKuMpw+4fUYcA0yPQV1aem/+wq4Xrmcvt7Q4wXQJ9ZWcJ9In6vo15AKZHoK/sFL3KifpFXTUAwBQI9JX9pB4FymSUzWV+oC4BpkOgr+wC688n6jtJvtjQ/QB0ikBfmY1QJmuj0+oApkegr0ygT9bW+hwdgCkQ6Cv7ZVcL1lNbrBoAmB6BvjIbykye1xvAlHiDBYAGCPSV7dzVgvWYjWUApkSgr2zPrhasp8prbf9FrwSAaRHoK1M3k7UhyX4t3RBAlwitla3rasF6an29AJgCgb6yqwj1iTooyc0auh+AThHoK7takit1tXA9VOrz4EWvBIBpEegru3GS63a1cD20e5JdF70SAKZFoK/syCQ36Grheug6nqEDTI9AX1kJn326WrieWV+foQMwJQJ9dUfU5VaMpzw/v6c6BJgegb66Oya5VpcL2BMHmxAHMF0CfXU3rs/SGc8t6qQ4AKZEoK9uFxPjxlbmIdzHaw1gurzJrq5M5npkkmt3uZAdd1i9AJgigb6269nhbGR7JHmg1QIA0yfQ11ZOXXuEUBpJOV3tLo6iBZg+gb62sp/7LZPc0N7uQ7uXOQgAsyHQB1OWrj3Z1qVDuXqSByXZrUdlBugtgT6Y0jO/VZLb96GwHVE2krndolcCwKwI9MEdkuQBdo4byFFJnmLvdoDZEejDuXcdRmZl6+sOe1YGAMyQQB/ONZI8oc7eZsfulORp6gZgtgT68Mpz4afWNdb8pjIB7jFOVgOYPYE+vLKm+k+T/EHfCj5lV0ry35Lcr+m7BOgogT6avZM8sR4Lyq9eR49O8t+NXADMh0Af3X9Jckxdb73oDqpD7XstekUAzItAH085uOV5Sfbt802Mae9aB7fu9V0A9JxAH9/RSZ6V5IC+38gIyv72L0vy2N6VHKAxNkkZ35XrJio71SH4H/f9hga0T71fYQ7QAXrok1FOZPvjJM9ckDXq5RHDy4U5QHcI9Mkpof6kJC9IcmArN7UDJcxfkeRxnSsZwAIT6JO1Zx1+L4F3zZZurJ40d9Mkr65L1ADoEIE+HQ9N8oYkN2/kfnZP8kdJ3pLkYR0oDwDbMSlueu6R5OAkr0/y90l+3tP7uFrdGe+p1pkDdJdAn64bJPnbJIcmeW2S05Is9aj8j6wT3+7gtQLQbd6kp2/nOgP+bnUY/h1Jzul4mX+vHhP7pLo8DYCOE+izU4bfX5TkPknek+T4JN/pWBmPrBvl3DfJIR0oDwADEuizVXrrt6k94KPrJLNPJflWki1zKtNu9ZHAY+uHjevPq3IAGJ1An48SojdLcniSHyR5f5JTknwpyZkzKFFZ3XCjuv/6XesZ760tswNYKAJ9vnatQ9vPSLKxhvpHk3wzyan1WfumCZSwtPNVaoiX0YHrLuuNr+9zBQLwKwK9O3atw/G3qSU6qQ7Fn5fkkvr1V+vyt5+sMlt+37pufO/aAy+HxlwvyX51VKDlXewAFpZA765b1Gubi5N8L8mlSS5MsrVeV9Tf31CH0vetHw72qMvm9MABFoBA74+96ix0APgttn4FgAYIdABogEAHgAYIdABogEAHgAYIdABogEAHgAYIdABogEAHgAYIdABogEAHgAYIdABogEAHgAYIdABogEAHgAYIdABogEAHgAYIdABogEAHgAYIdABogEAHgAYIdABogEAHgAYIdABowAaNCLCqy5MsJVmX5NIkm+vXqb++3LodfKPd6nvtUr12U91Mg0AHSDYmuTDJ1iQX1P+WEcwzk3wkyZb6//+e5GfL3ju31D+7zfplI59L9fdumOSAJFck2ZTkbkluVv/uNuXv7J1kryRX1R6MQqADi+gHSb6f5Nza4/5cklPr199aFtKb6jWOb2/3d9+bZNftevflg8D1kxyc5K5JrpJk5yTXql8fVv8MrEigA4vgoiRfTnJ2ku8m+XyS05P8aA73fkW9tndqvY6tv76uBnrpuR+V5KAa+tdOcov6oQD+k0AHWlSee38vyYeTfCfJ12vP+8LaC++D0oM/p15fq+Utz9/3T3J4kivX4fwyhH9kDfidvZoXl0AHWlGGxs9LclySk5KcXJ+Bb2noHi+rowxnL/u119dgL8Py90pyqzpMrwe/YAT68M6oQ3U7ms266LbN4r1ukiN6Wkc/qcOemyzr/A/bnvPeqD7f7aIyhH5Kkk8n+USDIb6WH9frM0nenuR3ao/9wXXI/rBuF59JEejDKW9uL6r/aAT6jpU6ekySN/R0Ek9p22fXYVmB/utAf2SSN3WoTbfWYehPJXlX7Y1vHeDvte6XSb5Yr3cnuU6SeyS5c30Ov8+iV1DLBPpwttRJNEs7WH/Kr63v8Qees5dNWFqkXt5azqkfcuYd6CWwPl6H1N+f5JtzLk+XXVznDpTrjXX2/O8nuUuSQxa9clok0IezTp0NpM89W5OKdmznOX9Iu6gOKb+29sZ/Nsey9NGFtcd+XH108oAkj6uPx4w2NsKQItBlF9U14g9J8ogknxTmY9lURzVeXIfh/ybJN3p8Pywj0IEuKo87vpTkT5IcXSe7XaalJqos6/vLJPdO8g8eX/Sf4WOga8qM7Vcmed8Odllj8so6/T+ta9v/rD5j3089949AB7qiDAe/Lsk76qQ3ZueSJF9I8sQ6ce6llrv1j0AHuqBMdPvHJP+vnmjGfPw8yQfqJLoHJXm43np/CHRg3t6S5H8k+aGW6IwTlx1Y86y6E53Z8B1nUhwwL2VHtz9P8gxh3kllr4231h3nXmbkpPv00IF5KMvPnlNnstNdW+sZ8M+rG9WUWfG7a69uEujALG2qO739We2h0w9l98Rj6m6Bz6wnvtExhtyBWSnbJj+3ri0X5v1TQv3VSR6f5KOLXhldpIcOzELZT/yFSY5V2722Mcnx9Wz5Eu53X/QK6RI9dGDaykzpJwjzppQNf/64LjOkIwQ6ME3lnPIn1+M8acu2rWOP167dINCBaTm59uKEebvOrxMcP7ToFdEFAh2Yhm1hblla+7btBX/ColfEvAl0YNJKiD8pyZfV7MIoof53dctY5kSgA5P0lfrM/GS1unA+kuSv6gY0zIFAByalTJJ6vjBfWGXToNfXffl/uuiVMQ8CHZiEsu/3/07yQbW50LbUI3BfWtesM0MCHZiEf0ryXjVJ3f/9XXUPeGZIoAPjen+Spyc5W01SnZPkRfUxDDMi0IFxnFZP4jpXLbLM1vr45Q0qZXYEOjCqzfW5uaFVVlJC/fNqZzYEOjCKMqP5lUneqfZYRfmw9xd173emTKADozgjycuTXKL2WMNJST6skqZPoAPDuqQenXm+mmMAW+tozr+orOkS6MCwPpHk7WqNIXy/Pp65TKVNj0AHBlHeK3apb8xvTPJLtcaQ3lu3h2VKBDowiLID2Fl1r25HZTKK8qjmbfZ6nx6BDgyiTGz6w7oDGIzqo0k+qfamQ6ADgyi9qm/V5WowqrK/+5v10qdDoAMwS5804306BDoAs3RZPcxns1qfLIEOwKydkOTjan2yBDoAs3ZRkpPrpjNMiEAHYNbKMshj60RLJkSgAzAP36jLIZkQgQ7APFxRN5o5T+1PhkAHYF5O0EufHIEOwLxsrbPdL9cC4xPoAMzTZx3FOxkCHYB5Ot2w+2QIdADm6fK6FewVWmE8Ah2AeftSPV6VMQh0AObt7BrqjEGgAzBvFyQ5TiuMR6AD0AVnW742HoEOQBecmuRTWmJ0Ah2ALrgwyfe0xOgEOgBdUJatfUdLjE6gA9AVn09yltYYjUAHoCvOqpPjGIFAB6Arzq9L2BiBQAegK8rpaycm+aUWGd6GvhUYYDvlfWzXZb+0bsAKWqp/tkzG2qhSO+PE2kvfY9ErYlgCHeiTMqp4YJJdklwjySFJbpfk92o4Lw0x8lh6g+uTnJvkY0nOS/LNJBfVQLHJyXx8ry5hO2gRb34cAh3oshLO+yc5PMn1khyc5H5J9qmhvut2vfNR/G6Su9We+mU1TD6Z5F+TnJHk60k2eZXMzM/rBzOGJNCBLirvTXdIcu8kN6698N2GGE4f1s712j3JvklukORJtdf+0SSfqWd2f8urZerKyMmX6wet9Y3f60QJdKBLSg/8JkkeXAP9wDmWbdvw/uOSPCbJV5O8K8nxdWie6dhaH4E8LMlV1PHgBDrQBYcmuXWSxyc5MsleHWuVnepz+iOSPDzJu5Mcm+TbHShbi8qOcb8Q6MMR6MA87ZnkNkn+ovbIx30ePm0b6geOEux3TPLcJKeZQDdxFyfZ3Ng9TZ1AB+ZlvyQvSfLIHgT59kqP/e71EUE5x/vldVMUJmOd5+fDs7EMMGt71Fnlr03yRz0M8+XKsrln1g8m+3WnWL1XPhydsOiVMCyBDszSrjUA31YnvrWiPPs/RqhPzC/qJETL14ZgyB2YlRLmf1kDfZcGa/3Rdaj4GYbfJ2Lzst38GIAeOjALZQ35XyV5VqNhvs2jkryi7mLHeL5mQ5/hCHRg2spmLc+vPfOdF6C2j07yHD3LsW2RUcNRWcA0lZ758+ow9CI94isz9+/RgXL02VLdjpcBCXRgmu6V5OkLuARp7zoq8bveZ0dW9tD/UE/LPhdeaMC0HFqfmV9pQWv4Fgv0mGEaLk3y0/Zua3oEOjAN10nyN0mOWvDavXndUY7hlVnuP1FvgxPowDTcJ8kD1ex/nNr2FHuSj2RzPRudAQl0YNKOqCeU8Su/X89wh6kS6MCkPbGeTMavlN75E5JcXX0wTQIdmKRb1pnt/KabJrmzOhmajBqCygImZX3dn/16avS3lPX4d+lYmfrgYmvRByfQgUkpy7QepjZXVM59v1FHy9ZVpyQ5edErYVACHZiEdXVmuz3MV3ZYPZXNOd+Du9ha9MEJdGASjrBMbU3r6mTBvTtezi7ZZYE3JhqaQAcm4Yi6mQyrK7vnHa6OBlZ65+f2pKxzJ9CBcZUJX/e1xelArp3kJj0oZ1dcluS8Ra+EQQl0YFxlGPlOjgsd2OH1QxCDMedgQAIdGNftk1xVLQ7sDkkO6klZu2DLolfAoAQ6MI696tamhtsHdwOrAZgGgQ6M4xq2NB1aed89uGdlpgcEOjCO29YeJ4NbV+vMqAYTJdCBUZX3j98xwWsk9zWywaQJdGBUeya5ltobSZlEuKGH5Z4HOTUgFQWM6sb1FDGGV3Y/O0S9DWSpB2XsBIEOjOq6Sa6v9kZStjTdv4flnoePJTln8W57eAIdGNWeam5k62ugew9e2zn1kBbW4MUEjGInQ8ZjKT30+5tQOJBd7BY3GIEOjGJfe5KPbVfb5TJJAh0YxYFJbqXmxrLkPZhJ8mICRuX9Yzwl0Lf2+QboFv8ggVFczTrqsZXn53v3/B7oEIEOjOKGdbISoyvzEK6n/ta0zlyDwQh0YBSbvcmObcnRoAPZ6tHEYAQ6MKyyy9mRlhKNbd+62x6rOyvJj9TR2gQ6MKw96xnoeujj2T3J7fp8AzNyaZKNC3GnYxLowLDWee+YGKMca/N6G5BKAoZludXkqEcmRqADwzLUDh0k0IFh7eS9A7rHP0pgWM6nhg4S6MCwloQ6dI9AB4ZV1k7vpdagWwQ6MKx9bPs6MZatMTECHRjWZkPuE2PFABMj0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0AGgAQIdABog0Ie31LcCMxTtyyx5vQ1GPQ1AoA9vc98KPAeX97jsWztQhq7b6A12Yrze1rbk9TaYDX0oZIeUD0C3TPLdWqR1i14hO1DeoA7oXKkGd/MkhyXZ5APvDm1JcqC6mZhD6mvugiTrG7mnSSqvt2smuU47tzQ9An04JcCfm+TJ9W8J9N+07ZP0lXv8hv+AJHesbyTa97eVD2x71DZmfEcl+XCSy3xI2qHyets9yd4dLFvnCPTh7Vkv2rRL7YHCLJRe+f5qmknwiRAAGiDQAaABAh0AGiDQAaABAh0AGiDQAaABAh0AGiDQAaABAh0AGiDQAaABAh0AGiDQAaABAh0AGiDQAaABAh0AGiDQAaABAh0AGiDQAaABAh0AGiDQAaABAh0AGiDQAaABAh0AGiDQAaABAh0AGiDQAaABAh0AGiDQAaABAh0AGiDQAaABAh0AGiDQAaABAh0AGiDQAaABAh0AGiDQAaABAh0AGiDQAaABywN9vQYFgH5aHuibtSEA9NPyQH+NNgSAfloe6N/WhgDQS3ssD/Q9tCEA9M7GJO9ZHuhL9QIA+uOCJP9zeaB/KMmxGhAAemX3JHstD/QfJzldGwJAr5TsvmT7jWX20YYA0BvlUfkLk5y5faCXIffvaEcA6I0rsoOtXz+d5AvaEAB64c1JTs0Ke7m/pHTdtSMAdNrPknwwyUVZIdDPTrJFGwJAp5XVaR/eVsAdBfqmJO8T6gDQWecmefe25+dZIdDLjjPPT3KMdgSATjo5yfHLC7bSeegl8T+wbVweAOiMsjPcy7cvzEqBXnwpyd9rPwDolM8n+fL2BVot0DfXB+5na0cA6IQyzP7UJJdtX5jVAr34bJJH22wGADrhDUl+sKOCrBXoxQlJnlL2idWWADA3r6vD7Ts0SKCn7h53ijYEgLkoYf70JBeu9MMHDfSLkzzRtrAAMHOvqWF++Wo/eNBAL85I8ogkn9OWADATr0zyrLXCPEMGeurkuKOT/Kt2BICpelWS5+5oRvuODBvoxXeTPLZOnf+RtgSAiVpa1jPfOOg3HiXQi7OS3C/Jg+vXAMBkvKqG+aZhvtuogZ56eMuJ9bn66RoRAMbyz3WZ+HPq5m5D2TCBuv9ikgcluXMd6z9AewLAwDbWc82fPM4ZKpMI9OLr9TonyV8nOTTJlbQlAKzo/CQnJXlZkq8l+dk4VTWpQN/mfXVnuTIM/5Akt0mybsI/AwD67KI6uv2KJP+W5NJJ3MukAz21oK9O8sa6gfw1a7AfNYWfBQB9UYbW/ynJcfWaqGkE+jaXLjuv9bAkt63P1/88yd5T/tkAME9bk1xRs+4jdQT74hrkS9Mo16xC9fRlM+HLkPyedS373etseQBowboa2MfU5+O7J/mKfVsAAAAAAAAAYEaS/H8yVufhcQZM0AAAAABJRU5ErkJggg==",alt:"linkedin"})}),Object(B.jsx)("a",{href:"https://www.instagram.com/zkaigz/",target:"_blank",rel:"noreferrer",children:Object(B.jsx)("img",{src:G,alt:"instagram"})})]})]})]})})})};var X=function(){return Object(B.jsx)("section",{id:"main",children:Object(B.jsx)("div",{className:"section",children:Object(B.jsxs)("div",{className:"landing",children:[Object(B.jsx)("div",{className:"hi",children:Object(B.jsx)("p",{children:"Hi."})}),Object(B.jsxs)("div",{className:"intro",children:[Object(B.jsx)("span",{className:"intro-name",children:Object(B.jsx)("p",{children:"My name's Zach."})}),Object(B.jsx)("span",{className:"intro-title",children:Object(B.jsx)("p",{children:"I'm a full stack software engineer."})})]})]})})})},P=c.p+"static/media/logo.60f2d5c2.png";var T=function(){var e=Object(s.useState)("none"),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(B.jsxs)("div",{className:"nav",children:[Object(B.jsx)(A.Link,{to:"top",className:"logo-link",smooth:!0,duration:1e3,onClick:function(){return n("none")},children:Object(B.jsx)("img",{src:P,alt:"logo"})}),Object(B.jsxs)("div",{className:"nav-links-container",children:[Object(B.jsx)(A.Link,{to:"about",className:"about"===c?"nav-link active":"nav-link",smooth:!0,duration:1e3,onClick:function(){return n("about")},children:"Me"}),Object(B.jsx)(A.Link,{to:"projects",className:"projects"===c?"nav-link active":"nav-link",smooth:!0,duration:1e3,onClick:function(){return n("projects")},children:"Stuff I Made"}),Object(B.jsx)(A.Link,{to:"blogs",className:"blogs"===c?"nav-link active":"nav-link",smooth:!0,duration:1e3,onClick:function(){return n("blogs")},children:"Things I Wrote"}),Object(B.jsx)(A.Link,{to:"contact",className:"contact"===c?"nav-link active":"nav-link",smooth:!0,duration:1e3,onClick:function(){return n("contact")},children:"Hit Me Up"})]})]})},M=[{name:"QuickNote",image:c.p+"static/media/proj-quicknote.fd9b8562.png",desc:"A light-weight note taking productivity app.",tools:["React","Redux","Nodejs","Express","Sass","JWT","bcrypt","MongoDB","react-spring","Adobe Photoshop"],videoId:null,linkUrl:"https://quicknote-zk.netlify.app/",githubUrl:"https://github.com/zachkaigler/quicknote-frontend"},{name:"Game On",image:c.p+"static/media/proj-gameon.a45e3b81.png",desc:"A social networking app designed to connect users to new friend groups through shared interests in hobbies and games.",tools:["React","Ruby on Rails","Action Cable","WebSockets","JWT","Adobe Photoshop","Adobe AfterEffects","Semantic UI React","Custom CSS"],videoId:"WNL0FNjPNUQ",linkUrl:null,githubUrl:"https://github.com/zachkaigler/game-on-frontend"},{name:"Flex Fox!",image:c.p+"static/media/proj-flexfox.d4e9a5dc.png",desc:"An adorable Flexbox visualizer designed to showcase the technology\u2019s versatility in styling collections of items.",tools:["React","styled-components","Adobe Photoshop","Custom CSS"],videoId:null,linkUrl:"https://zachkaigler.github.io/flex-fox/",githubUrl:"https://github.com/zachkaigler/flex-fox"},{name:"Vinylboxd",image:c.p+"static/media/proj-vinylboxd.e2839032.png",desc:"A social platform for vinyl enthusiasts to share, rate, and review records in their collection.",tools:["React","Ruby on Rails","JWT","Adobe Photoshop","Semantic UI React","Custom CSS"],videoId:"Qc-piW2B2vE",linkUrl:null,githubUrl:"https://github.com/jbrundagejr/phase-4-front-end"}],H=c(24),E=c(16),C=function(e){var t=e.name,c=e.image,n=e.desc,a=e.tools,A=e.videoId,o=e.linkUrl,l=e.githubUrl,r=e.projects,d=e.proj,g=e.isOpen,j=e.setIsOpen,b=e.activeVideo,m=e.setActiveVideo,h=Object(s.useState)(!!(r.indexOf(d)<=2||g||A===b)),u=Object(i.a)(h,2),f=u[0],O=u[1];Object(s.useEffect)((function(){O(!0)}),[]);var p=function(){return r.indexOf(d)%2!==0},k=a.map((function(e){return Object(B.jsxs)("span",{className:"tool",children:["[",e,"]"]},Object(H.v4)())})),v=Object(E.useSpring)({config:{duration:400},opacity:f?1:0,filter:f?"blur(0px)":"blur(5px)",transform:f?"translateY(0%)":"translateY(-100%)"});return Object(B.jsxs)(E.animated.div,{className:"project-container ".concat(p()?"align-right":null),style:v,children:[p()?null:Object(B.jsx)("img",{src:c,className:"proj-screen",alt:t}),Object(B.jsxs)("div",{className:"project-info ".concat(p()?"align-right":null),children:[p()?Object(B.jsxs)("div",{className:"project-title",children:[Object(B.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",children:Object(B.jsx)("img",{className:"gh-icon",src:S,alt:"github"})})," ",Object(B.jsx)("h2",{children:t})]}):Object(B.jsxs)("div",{className:"project-title",children:[Object(B.jsx)("h2",{children:t})," ",Object(B.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",children:Object(B.jsx)("img",{className:"gh-icon",src:S,alt:"github"})})]}),Object(B.jsx)("p",{children:n}),Object(B.jsxs)("div",{className:"project-tech ".concat(p()?"align-right":null),children:[Object(B.jsx)("span",{className:"built-with",children:"Built with:"}),Object(B.jsx)("p",{children:k})]}),A?Object(B.jsx)("h3",{onClick:function(){m(A),j(!0)},children:"Watch Demo"}):Object(B.jsx)("a",{href:o,target:"blank",children:"Check It Out"})]}),p()?Object(B.jsx)("img",{src:c,className:"proj-screen",alt:t}):null]})};var L=function(e){var t=e.isOpen,c=e.setIsOpen,n=e.activeVideo,a=e.setActiveVideo,A=Object(s.useState)(2),o=Object(i.a)(A,2),l=o[0],r=o[1],d=M.map((function(e){return M.indexOf(e)<=l?Object(B.jsx)(C,{name:e.name,image:e.image,desc:e.desc,tools:e.tools,videoId:e.videoId,linkUrl:e.linkUrl,githubUrl:e.githubUrl,projects:M,proj:e,displayNum:l,isOpen:t,setIsOpen:c,activeVideo:n,setActiveVideo:a},Object(H.v4)()):null}));return Object(B.jsx)("section",{id:"projects",children:Object(B.jsx)("div",{className:"section",children:Object(B.jsxs)("div",{className:"projects",children:[Object(B.jsx)("h1",{children:"Project Work"}),Object(B.jsx)("div",{className:"line"}),Object(B.jsx)("div",{className:"projects-list",children:d}),l>=M.length?Object(B.jsx)("h3",{className:"show",onClick:function(){return r(2)},children:"Show Less"}):Object(B.jsx)("h3",{className:"show",onClick:function(){return r(l+3)},children:"Show More"})]})})})},Z=function(e){var t=e.isOpen,c=e.setIsOpen,n=e.activeVideo,a=Object(E.useSpring)({config:{duration:800},opacity:t?1:0,filter:t?"blur(0px)":"blur(5px)",transform:t?"translateY(0%)":"translateY(-100%)"}),i=Object(s.useRef)();return t?Object(B.jsx)("div",{className:"modal-bg",ref:i,onClick:function(e){i.current===e.target&&c(!1)},children:Object(B.jsx)(E.animated.div,{className:"modal",style:a,children:Object(B.jsx)("iframe",{width:"853",height:"480",src:"https://www.youtube.com/embed/".concat(n),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})}):null};var W=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(null),A=Object(i.a)(a,2),o=A[0],l=A[1];return Object(B.jsx)("section",{id:"top",children:Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)(Z,{isOpen:c,setIsOpen:n,activeVideo:o}),Object(B.jsx)(T,{}),Object(B.jsx)(X,{}),Object(B.jsx)(x,{}),Object(B.jsx)(L,{isOpen:c,setIsOpen:n,activeVideo:o,setActiveVideo:l}),Object(B.jsx)(J,{}),Object(B.jsx)(w,{}),Object(B.jsx)("div",{className:"footer",children:Object(B.jsxs)("p",{children:["Designed and built by Zach Kaigler. ",Object(B.jsx)("a",{href:"https://github.com/zachkaigler/zach-kaigler-portfolio",target:"_blank",rel:"noreferrer",className:"inline-link",children:"Check out the repo."})]})})]})})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,64)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};a.a.render(Object(B.jsx)(W,{}),document.getElementById("root")),z()}},[[63,1,2]]]);
//# sourceMappingURL=main.dc8efccb.chunk.js.map