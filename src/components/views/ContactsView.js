import React from 'react'
import {useSelector} from "react-redux";


const ContactsView = () => {
    const store = useSelector(store => store)


    return (
        <div className={'contactsViewDiv'}>
            <article className={'get_in_Touch'}>
                <h1>{store.contacts.social.name}</h1>
                <div>
                    <ul className={'get_in_touch_ul'}>
                        <li><a href={'https://twitter.com/AlekseyVYX'} target={'_blank'} rel="noopener noreferrer">
                            <img className={'social'} src={'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5v' +
                            'cmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl' +
                            '0ZXJsaW1pdDoyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2VyaWY9' +
                            'Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGQ9Ik00NDgsNTEybC0zODQsMGMtMzUuMzI4LDAgLTY0LC0yOC42NzIgLTY0LC02NGwwLC0zODR' +
                            'jMCwtMzUuMzI4IDI4LjY3MiwtNjQgNjQsLTY0bDM4NCwwYzM1LjMyOCwwIDY0LDI4LjY3MiA2NCw2NGwwLDM4NGMwLDM1LjMyOCAtMjguNjcyLDY0IC02NCw2NFoiIGlkPSJEYXJrX0JsdWUiIHN0eWxlPSJmaWxsOiMxZGExZjI7Z' +
                            'mlsbC1ydWxlOm5vbnplcm87Ii8+PHBhdGggZD0iTTE5Ni42MDgsMzg2LjA0OGMxMjAuNzA0LDAgMTg2Ljc1MiwtMTAwLjA5NiAxODYuNzUyLC0xODYuNzUyYzAsLTIuODE2IDAsLTUuNjMyIC0wLjEyOCwtOC40NDhjMTIuOCwtOS4' +
                            'yMTYgMjMuOTM2LC0yMC44NjQgMzIuNzY4LC0zNC4wNDhjLTExLjc3Niw1LjI0OCAtMjQuNDQ4LDguNzA0IC0zNy43NiwxMC4zNjhjMTMuNTY4LC04LjA2NCAyMy45MzYsLTIwLjk5MiAyOC45MjgsLTM2LjM1MmMtMTIuNjcyLDcuNT' +
                            'UyIC0yNi43NTIsMTIuOTI4IC00MS43MjgsMTUuODcyYy0xMi4wMzIsLTEyLjggLTI5LjA1NiwtMjAuNzM2IC00Ny44NzIsLTIwLjczNmMtMzYuMjI0LDAgLTY1LjY2NCwyOS40NCAtNjUuNjY0LDY1LjY2NGMwLDUuMTIgMC42NCwxMC' +
                            '4xMTIgMS42NjQsMTQuOTc2Yy01NC41MjgsLTIuNjg4IC0xMDIuOTEyLC0yOC45MjggLTEzNS4yOTYsLTY4LjYwOGMtNS42MzIsOS43MjggLTguODMyLDIwLjk5MiAtOC44MzIsMzMuMDI0YzAsMjIuNzg0IDExLjY0OCw0Mi44OCAyO' +
                            'S4xODQsNTQuNjU2Yy0xMC43NTIsLTAuMzg0IC0yMC44NjQsLTMuMzI4IC0yOS42OTYsLTguMTkybDAsMC44OTZjMCwzMS43NDQgMjIuNjU2LDU4LjM2OCA1Mi42MDgsNjQuMzg0Yy01LjUwNCwxLjUzNiAtMTEuMjY0LDIuMzA0IC0x' +
                            'Ny4yOCwyLjMwNGMtNC4yMjQsMCAtOC4zMiwtMC4zODQgLTEyLjI4OCwtMS4xNTJjOC4zMiwyNi4xMTIgMzIuNjQsNDUuMDU2IDYxLjMxMiw0NS41NjhjLTIyLjUyOCwxNy42NjQgLTUwLjgxNiwyOC4xNiAtODEuNTM2LDI4LjE2Yy' +
                            '01LjI0OCwwIC0xMC40OTYsLTAuMjU2IC0xNS42MTYsLTAuODk2YzI4LjkyOCwxOC40MzIgNjMuNDg4LDI5LjMxMiAxMDAuNDgsMjkuMzEyIiBpZD0iTG9nb19feDIwMTRfX0ZJWEVEIiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtcnVs' +
                            'ZTpub256ZXJvOyIvPjwvZz48L3N2Zz4='} alt={'twitter link'}/>
                        </a>
                        </li>
                        <li>
                            <a href={'https://vk.com/alekseyvy'} target={'_blank'} rel="noopener noreferrer">
                            <img className={'social'} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53
                            My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUwIDUwIiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtb
                            DpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik00NSwxSDVDMi44LDEsMSwyLjgsMSw1djQ
                            wYzAsMi4yLDEuOCw0LDQsNGg0MGMyLjIsMCw0LTEuOCw0LTRWNUM0OSwyLjgsNDcuMiwxLDQ1LDF6IiBmaWxsPSIjNTQ3NjlCIi8+PHBhdGggZD0iTTI2LDM0YzEsMCwxLTEuNCwxLTJjMC0xLDEtMiwyLTJzMi43LDEuNyw0LDNj
                            MSwxLDEsMSwyLDFzMywwLDMsMHMyLTAuMSwyLTJjMC0wLjYtMC43LTEuNy0zLTQgIGMtMi0yLTMtMSwwLTVjMS44LTIuNSwzLjItNC43LDMtNS4zYy0wLjItMC42LTUuMy0xLjYtNi0wLjdjLTIsMy0yLjQsMy43LTMsNWMtMSwyLT
                            EuMSwzLTIsM2MtMC45LDAtMS0xLjktMS0zYzAtMy4zLDAuNS01LjYtMS02ICBjMCwwLTIsMC0zLDBjLTEuNiwwLTMsMS0zLDFzLTEuMiwxLTEsMWMwLjMsMCwyLTAuNCwyLDFjMCwxLDAsMiwwLDJzMCw0LTEsNGMtMSwwLTMtNC01LT
                            djLTAuOC0xLjItMS0xLTItMWMtMS4xLDAtMiwwLTMsMCAgYy0xLDAtMS4xLDAuNi0xLDFjMiw1LDMuNCw4LjEsNy4yLDEyLjFjMy41LDMuNiw1LjgsMy44LDcuOCwzLjlDMjUuNSwzNCwyNSwzNCwyNiwzNHoiIGZpbGw9IiNGRkZGR
                            kYiIGlkPSJWS18xXyIvPjwvc3ZnPg==" alt={'vkontakte link'}/>
                            </a>
                        </li>
                        <li>
                            <a href={'https://www.linkedin.com/in/aleksey-vasiliev-b79a53150/'} target={'_blank'} rel="noopener noreferrer">
                            <img className={'social'} src={'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vc' +
                            'mcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZX' +
                            'JsaW1pdDoyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2VyaWY9Im' +
                            'h0dHA6Ly93d3cuc2VyaWYuY29tLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJnNTg5MSI+PHBhdGggZD0iTTUxMiw2NGMwLC0zNS4zMjMgLTI4LjY3NywtNjQgLTY0LC02NGwtMz' +
                            'g0LDBjLTM1LjMyMywwIC02NCwyOC42NzcgLTY0LDY0bDAsMzg0YzAsMzUuMzIzIDI4LjY3Nyw2NCA2NCw2NGwzODQsMGMzNS4zMjMsMCA2NCwtMjguNjc3IDY0LC02NGwwLC0zODRaIiBpZD0iYmFja2dyb3VuZCIgc3R5bGU9ImZp' +
                            'bGw6IzI4NjdiMjsiLz48ZyBpZD0ic2hhcGVzIj48cmVjdCBoZWlnaHQ9IjI1Ny45NjIiIGlkPSJyZWN0MTEiIHN0eWxlPSJmaWxsOiNmZmY7IiB3aWR0aD0iODUuNzYiIHg9IjYxLjA1MyIgeT0iMTc4LjY2NyIvPjxwYXRoIGQ9Ik' +
                            '0xMDQuNTEyLDU0LjI4Yy0yOS4zNDEsMCAtNDguNTEyLDE5LjI5IC00OC41MTIsNDQuNTczYzAsMjQuNzUyIDE4LjU4OCw0NC41NzQgNDcuMzc3LDQ0LjU3NGwwLjU1NCwwYzI5LjkwMywwIDQ4LjUxNiwtMTkuODIyIDQ4LjUxNiwt' +
                            'NDQuNTc0Yy0wLjU1NSwtMjUuMjgzIC0xOC42MTEsLTQ0LjU3MyAtNDcuOTM1LC00NC41NzNaIiBpZD0icGF0aDEzLTAiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PHBhdGggZD0iTTM1Ny4yNzgsMTcyLj' +
                            'YwMWMtNDUuNDksMCAtNjUuODY2LDI1LjAxNyAtNzcuMjc2LDQyLjU4OWwwLC0zNi41MjNsLTg1LjczOCwwYzEuMTM3LDI0LjE5NyAwLDI1Ny45NjEgMCwyNTcuOTYxbDg1LjczNywwbDAsLTE0NC4wNjRjMCwtNy43MTEgMC41NTQs' +
                            'LTE1LjQyIDIuODI3LC0yMC45MzFjNi4xODgsLTE1LjQgMjAuMzA1LC0zMS4zNTIgNDMuOTkzLC0zMS4zNTJjMzEuMDEyLDAgNDMuNDM2LDIzLjY2NCA0My40MzYsNTguMzI3bDAsMTM4LjAybDg1Ljc0MSwwbDAsLTE0Ny45M2MwLC' +
                            '03OS4yMzcgLTQyLjMwNSwtMTE2LjA5NyAtOTguNzIsLTExNi4wOTdaIiBpZD0icGF0aDE1IiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtcnVsZTpub256ZXJvOyIvPjwvZz48L2c+PC9zdmc+'} alt={'linkedin link'}/>
                            </a>
                        </li>
                        <li>
                            <a href={'https://www.reddit.com/user/AlekseyVY'} target={'_blank'} rel="noopener noreferrer">
                            <img className={'social'} src={'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vc' +
                            'mcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJs' +
                            'aW1pdDoyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2VyaWY9Imh0dHA' +
                            '6Ly93d3cuc2VyaWYuY29tLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGQ9Ik00NDgsNTEybC0zODQsMGMtMzUuMzQ4LDAgLTY0LC0yOC42NTIgLTY0LC02NGwwLC0zODRjMCwtM' +
                            'zUuMzQ0IDI4LjY1MiwtNjQgNjQsLTY0bDM4NCwwYzM1LjM0OCwwIDY0LDI4LjY1NiA2NCw2NGwwLDM4NGMwLDM1LjM0OCAtMjguNjUyLDY0IC02NCw2NFoiIHN0eWxlPSJmaWxsOiNmMDQ5MjM7ZmlsbC1ydWxlOm5vbnplcm87Ii8' +
                            '+PHBhdGggZD0iTTMyMi44NCwzMTIuODk2Yy0xNS42OCwwIC0yOC40NDQsLTEyLjc2IC0yOC40NDQsLTI4LjQ0YzAsLTE1LjY4OCAxMi43NjQsLTI4LjQ1NiAyOC40NDQsLTI4LjQ1NmMxNS42ODQsMCAyOC40NDgsMTIuNzY4IDI4L' +
                            'jQ0OCwyOC40NTZjMCwxNS42OCAtMTIuNzY0LDI4LjQ0IC0yOC40NDgsMjguNDRabTUuMDA4LDQ2LjcxNmMtMTkuNDEyLDE5LjM4NCAtNTYuNjEyLDIwLjg5MiAtNjcuNTQ4LDIwLjg5MmMtMTAuOTQ0LDAgLTQ4LjE0OCwtMS41MDgg' +
                            'LTY3LjUzNiwtMjAuODk2Yy0yLjg4LC0yLjg4IC0yLjg4LC03LjU0OCAwLC0xMC40MjhjMi44NzYsLTIuODcyIDcuNTQ4LC0yLjg3NiAxMC40MjQsMGMxMi4yMzYsMTIuMjQgMzguNDEyLDE2LjU4NCA1Ny4xMTIsMTYuNTg0YzE4LjY' +
                            '5NiwwIDQ0Ljg3NiwtNC4zNDQgNTcuMTMyLC0xNi41ODhjMi44ODgsLTIuODcyIDcuNTUyLC0yLjg2OCAxMC40MjQsMC4wMDhjMi44OCwyLjg4NCAyLjg3Niw3LjU0OCAtMC4wMDgsMTAuNDI4Wm0tMTU4LjYwNCwtNzUuMTZjMCwtMT' +
                            'UuNjg4IDEyLjc2NCwtMjguNDUyIDI4LjQ1NiwtMjguNDUyYzE1LjY3NiwwIDI4LjQzMiwxMi43NjQgMjguNDMyLDI4LjQ1MmMwLDE1LjY4IC0xMi43NTYsMjguNDM2IC0yOC40MzIsMjguNDM2Yy0xNS42OTIsMCAtMjguNDU2LC0xMi' +
                            '43NTYgLTI4LjQ1NiwtMjguNDM2Wm0yNzMuMDIsLTI4LjQ1MmMwLC0yMS45OTIgLTE3LjgyOCwtMzkuODIgLTM5LjgyLC0zOS44MmMtMTAuNzM2LDAgLTIwLjQ1Niw0LjI2OCAtMjcuNjIsMTEuMTcyYy0yNy4yMiwtMTkuNjQgLTY0L' +
                            'jcyNCwtMzIuMzI4IC0xMDYuNDk2LC0zMy43ODRsMTguMTQsLTg1LjM0OGw1OS4yNjQsMTIuNmMwLjcyNCwxNS4wNjggMTMuMDY0LDI3LjA5MiAyOC4zMDgsMjcuMDkyYzE1LjcxMiwwIDI4LjQ0OCwtMTIuNzM2IDI4LjQ0OCwtMjg' +
                            'uNDQ0YzAsLTE1LjcwOCAtMTIuNzM2LC0yOC40NDQgLTI4LjQ0OCwtMjguNDQ0Yy0xMS4xNzIsMCAtMjAuNzQsNi41MDQgLTI1LjM5MiwxNS44NzZsLTY2LjE4LC0xNC4wNjhjLTEuODQsLTAuNCAtMy43NzIsLTAuMDQgLTUuMzQ4LDA' +
                            'uOTkyYy0xLjU4OCwxLjAyOCAtMi42OTIsMi42NDQgLTMuMDg4LDQuNDg4bC0yMC4yNTYsOTUuMjI4Yy00Mi4zODQsMS4xNzYgLTgwLjQ4OCwxMy44OCAtMTA4LjA2LDMzLjc0Yy03LjE1MiwtNi44NiAtMTYuODQ0LC0xMS4xIC0yNy' +
                            '41NCwtMTEuMWMtMjEuOTkyLDAgLTM5LjgyNCwxNy44MjggLTM5LjgyNCwzOS44MmMwLDE2LjE4IDkuNjY4LDMwLjA4IDIzLjUyOCwzNi4zMTJjLTAuNjEyLDMuOTYgLTAuOTQ4LDcuOTc2IC0wLjk0OCwxMi4wNDRjMCw2MS4yNjggN' +
                            'zEuMzE2LDExMC45MzIgMTU5LjI4OCwxMTAuOTMyYzg3Ljk3MiwwIDE1OS4yOTIsLTQ5LjY2NCAxNTkuMjkyLC0xMTAuOTMyYzAsLTQuMDQgLTAuMzMyLC04LjAzMiAtMC45MzYsLTExLjk2NGMxMy45NDgsLTYuMTk2IDIzLjY4OCwt' +
                            'MjAuMTQ0IDIzLjY4OCwtMzYuMzkyWiIgc3R5bGU9ImZpbGw6I2ZmZjtmaWxsLXJ1bGU6bm9uemVybzsiLz48L2c+PC9zdmc+'} alt={'reddit link'}/>
                            </a>
                        </li>
                        <li>
                            <a href={'https://www.instagram.com/alekseyaraara/'} target={'_blank'} rel="noopener noreferrer">
                            <img className={'social'} src={'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmc' +
                            'vR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdH' +
                            'Jva2UtbWl0ZXJsaW1pdDoyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2' +
                            'ZyIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGQ9Ik0yNTYsMGMtNjkuNTI2LDAgLTc4LjI0NCwwLjI5NSAt' +
                            'MTA1LjU0OSwxLjU0MWMtMjcuMjQ4LDEuMjQzIC00NS44NTgsNS41NyAtNjIuMTQyLDExLjg5OWMtMTYuODM0LDYuNTQyIC0zMS4xMTEsMTUuMjk2IC00NS4zNDIsMjkuNTI4Yy0xNC4yMzIsMTQuMjMxIC0yMi45ODYsM' +
                            'jguNTA4IC0yOS41MjgsNDUuMzQyYy02LjMyOSwxNi4yODMgLTEwLjY1NiwzNC44OTMgLTExLjg5OSw2Mi4xNDFjLTEuMjQ2LDI3LjMwNSAtMS41NCwzNi4wMjMgLTEuNTQsMTA1LjU0OWMwLDY5LjUyNCAwLjI5NCw3OC4' +
                            'yNDIgMS41NCwxMDUuNTQ3YzEuMjQzLDI3LjI0OCA1LjU3LDQ1Ljg1OCAxMS44OTksNjIuMTQxYzYuNTQyLDE2LjgzNCAxNS4yOTYsMzEuMTExIDI5LjUyOCw0NS4zNDRjMTQuMjMxLDE0LjIzMSAyOC41MDgsMjIuOTg1I' +
                            'DQ1LjM0MiwyOS41MjdjMTYuMjg0LDYuMzI4IDM0Ljg5NCwxMC42NTYgNjIuMTQyLDExLjg5OWMyNy4zMDUsMS4yNDUgMzYuMDIzLDEuNTQgMTA1LjU0OSwxLjU0YzY5LjUyNCwwIDc4LjI0MiwtMC4yOTUgMTA1LjU0NywtM' +
                            'S41NGMyNy4yNDgsLTEuMjQzIDQ1Ljg1OCwtNS41NzEgNjIuMTQxLC0xMS44OTljMTYuODM0LC02LjU0MiAzMS4xMTEsLTE1LjI5NiA0NS4zNDQsLTI5LjUyN2MxNC4yMzEsLTE0LjIzMyAyMi45ODUsLTI4LjUxIDI5LjUyNy' +
                            'wtNDUuMzQ0YzYuMzI4LC0xNi4yODMgMTAuNjU2LC0zNC44OTMgMTEuODk5LC02Mi4xNDFjMS4yNDUsLTI3LjMwNSAxLjU0LC0zNi4wMjMgMS41NCwtMTA1LjU0N2MwLC02OS41MjYgLTAuMjk1LC03OC4yNDQgLTEuNTQsLTEwNS' +
                            '41NDljLTEuMjQzLC0yNy4yNDggLTUuNTcxLC00NS44NTggLTExLjg5OSwtNjIuMTQxYy02LjU0MiwtMTYuODM0IC0xNS4yOTYsLTMxLjExMSAtMjkuNTI3LC00NS4zNDJjLTE0LjIzMywtMTQuMjMyIC0yOC41MSwtMjIuOTg2I' +
                            'C00NS4zNDQsLTI5LjUyOGMtMTYuMjgzLC02LjMyOSAtMzQuODkzLC0xMC42NTYgLTYyLjE0MSwtMTEuODk5Yy0yNy4zMDUsLTEuMjQ2IC0zNi4wMjMsLTEuNTQxIC0xMDUuNTQ3LC0xLjU0MVptMCw0Ni4xMjdjNjguMzU0LDA' +
                            'gNzYuNDUxLDAuMjYgMTAzLjQ0NSwxLjQ5MmMyNC45NTksMS4xMzkgMzguNTE0LDUuMzA5IDQ3LjUzNSw4LjgxNGMxMS45NDksNC42NDQgMjAuNDc3LDEwLjE5MiAyOS40MzUsMTkuMTVjOC45NTksOC45NTggMTQuNTA2LDE3Lj' +
                            'Q4NyAxOS4xNSwyOS40MzVjMy41MDYsOS4wMjEgNy42NzYsMjIuNTc2IDguODE1LDQ3LjUzNWMxLjIzMSwyNi45OTUgMS40OTIsMzUuMDkyIDEuNDkyLDEwMy40NDdjMCw2OC4zNTQgLTAuMjYxLDc2LjQ1MSAtMS40OTIsMTAzLj' +
                            'Q0NWMtMS4xMzksMjQuOTU5IC01LjMwOSwzOC41MTQgLTguODE1LDQ3LjUzNWMtNC42NDQsMTEuOTQ5IC0xMC4xOTEsMjAuNDc3IC0xOS4xNSwyOS40MzVjLTguOTU4LDguOTU5IC0xNy40ODYsMTQuNTA2IC0yOS40MzUsMTkuMTVj' +
                            'LTkuMDIxLDMuNTA2IC0yMi41NzYsNy42NzYgLTQ3LjUzNSw4LjgxNGMtMjYuOTksMS4yMzIgLTM1LjA4NiwxLjQ5MyAtMTAzLjQ0NSwxLjQ5M2MtNjguMzYxLDAgLTc2LjQ1NSwtMC4yNjEgLTEwMy40NDcsLTEuNDkzYy0yNC45NTks' +
                            'LTEuMTM4IC0zOC41MTQsLTUuMzA4IC00Ny41MzUsLTguODE0Yy0xMS45NDksLTQuNjQ0IC0yMC40NzcsLTEwLjE5MSAtMjkuNDM2LC0xOS4xNWMtOC45NTgsLTguOTU4IC0xNC41MDYsLTE3LjQ4NiAtMTkuMTQ5LC0yOS40MzVjLTM' +
                            'uNTA2LC05LjAyMSAtNy42NzYsLTIyLjU3NiAtOC44MTUsLTQ3LjUzNWMtMS4yMzIsLTI2Ljk5NCAtMS40OTIsLTM1LjA5MSAtMS40OTIsLTEwMy40NDVjMCwtNjguMzU1IDAuMjYsLTc2LjQ1MiAxLjQ5MiwtMTAzLjQ0N2MxLjE' +
                            'zOSwtMjQuOTU5IDUuMzA5LC0zOC41MTQgOC44MTUsLTQ3LjUzNWM0LjY0MywtMTEuOTQ4IDEwLjE5MSwtMjAuNDc3IDE5LjE0OSwtMjkuNDM1YzguOTU5LC04Ljk1OCAxNy40ODcsLTE0LjUwNiAyOS40MzYsLTE5LjE1YzkuMDI' +
                            'xLC0zLjUwNSAyMi41NzYsLTcuNjc1IDQ3LjUzNSwtOC44MTRjMjYuOTk1LC0xLjIzMiAzNS4wOTIsLTEuNDkyIDEwMy40NDcsLTEuNDkyWiIgc3R5bGU9ImZpbGw6dXJsKCNfTGluZWFyMSk7ZmlsbC1ydWxlOm5vbnplcm87Ii' +
                            '8+PHBhdGggZD0iTTI1NiwzNDEuMzMyYy00Ny4xMjksMCAtODUuMzM0LC0zOC4yMDUgLTg1LjMzNCwtODUuMzMyYzAsLTQ3LjEyOSAzOC4yMDUsLTg1LjMzNCA4NS4zMzQsLTg1LjMzNGM0Ny4xMjcsMCA4NS4zMzIsMzguMjA1' +
                            'IDg1LjMzMiw4NS4zMzRjMCw0Ny4xMjcgLTM4LjIwNSw4NS4zMzIgLTg1LjMzMiw4NS4zMzJabTAsLTIxNi43OTJjLTcyLjYwNCwwIC0xMzEuNDYsNTguODU2IC0xMzEuNDYsMTMxLjQ2YzAsNzIuNjAyIDU4Ljg1NiwxMzEuNDU4I' +
                            'DEzMS40NiwxMzEuNDU4YzcyLjYwMiwwIDEzMS40NTgsLTU4Ljg1NiAxMzEuNDU4LC0xMzEuNDU4YzAsLTcyLjYwNCAtNTguODU2LC0xMzEuNDYgLTEzMS40NTgsLTEzMS40NloiIHN0eWxlPSJmaWxsOnVybCgjX0xpbmVhcjIpO2Z' +
                            'pbGwtcnVsZTpub256ZXJvOyIvPjxwYXRoIGQ9Ik00MjMuMzcyLDExOS4zNDZjMCwxNi45NjcgLTEzLjc1NCwzMC43MiAtMzAuNzIsMzAuNzJjLTE2Ljk2NiwwIC0zMC43MiwtMTMuNzUzIC0zMC43MiwtMzAuNzJjMCwtMTYuOTY' +
                            '2IDEzLjc1NCwtMzAuNzE5IDMwLjcyLC0zMC43MTljMTYuOTY2LDAgMzAuNzIsMTMuNzUzIDMwLjcyLDMwLjcxOVoiIHN0eWxlPSJmaWxsOnVybCgjX0xpbmVhcjMpO2ZpbGwtcnVsZTpub256ZXJvOyIvPjwvZz48ZGVmcz48bGluZ' +
                            'WFyR3JhZGllbnQgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMTQ5LjYxOCw0OTQuMywtNDk0LjMsLTE0OS42MTgsMzAwLjgxLC0yNy4xMjgzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJfTGluZWFyMSI' +
                            'geDE9IjAiIHgyPSIxIiB5MT0iMCIgeTI9IjAiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzUxNWJkNDtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMC4yNiIgc3R5bGU9InN0b3AtY29sb3I6Izk1MT' +
                            'BiODtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMC42NiIgc3R5bGU9InN0b3AtY29sb3I6I2U1MTgwNDtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I2ZlZGE3NztzdG9' +
                            'wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTE0OS42MTgsNDk0LjMsLTQ5NC4zLC0xNDkuNjE4LDMwMC44MSwtMjcuMTI4MykiIGdyYWRpZW50' +
                            'VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iX0xpbmVhcjIiIHgxPSIwIiB4Mj0iMSIgeTE9IjAiIHkyPSIwIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiM1MTViZDQ7c3RvcC1vcGFjaXR5OjEiLz48c3Rvc' +
                            'CBvZmZzZXQ9IjAuMjYiIHN0eWxlPSJzdG9wLWNvbG9yOiM5NTEwYjg7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjAuNjYiIHN0eWxlPSJzdG9wLWNvbG9yOiNlNTE4MDQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZ' +
                            'zZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmJmMDA7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0xNDkuNjE4LDQ5NC4zLC00OTQ' +
                            'uMywtMTQ5LjYxOCwzMDAuODEsLTI3LjEyODMpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9Il9MaW5lYXIzIiB4MT0iMCIgeDI9IjEiIHkxPSIwIiB5Mj0iMCI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3R' +
                            'vcC1jb2xvcjojNTE1YmQ0O3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSIwLjI2IiBzdHlsZT0ic3RvcC1jb2xvcjojOTUxMGI4O3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSIwLjY2IiBzdHlsZT0ic3RvcC1j' +
                            'b2xvcjojZTUxODA0O3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZiZjAwO3N0b3Atb3BhY2l0eToxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+'} alt={'instagramm link'}/>
                            </a>
                        </li>
                        <li>
                            <a href={'https://wa.me/89377222062'} target={'_blank'} rel="noopener noreferrer">
                            <img className={'social'} src={'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcm' +
                            'cvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsa' +
                            'W1pdDoyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2VyaWY9Imh0dHA6' +
                            'Ly93d3cuc2VyaWYuY29tLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJXaGF0c0FwcC1Mb2dvLUljb24iPjxwYXRoIGQ9Ik0xMTYuMjI1LC0wLjAwMWMtMTEuMjY0LDAuNTEyIC0yNi4x' +
                            'MTIsMS41MzYgLTMyLjc2OCwzLjA3MmMtMTAuMjQsMi4wNDggLTE5Ljk2OCw1LjEyIC0yNy42NDgsOS4yMTZjLTkuNzI4LDQuNjA4IC0xNy45MiwxMC43NTIgLTI1LjA4OCwxNy45MmMtNy42OCw3LjY4IC0xMy44MjQsMTUuODcyIC0' +
                            'xOC40MzIsMjUuNmMtNC4wOTYsNy42OCAtNy4xNjgsMTcuNDA4IC05LjIxNiwyNy42NDhjLTEuNTM2LDYuNjU2IC0yLjU2LDIxLjUwNCAtMi41NiwzMi43NjhjLTAuNTEyLDQuNjA4IC0wLjUxMiwxMC43NTIgLTAuNTEyLDEzLjgyNG' +
                            'wwLDI1MS45MDVsMCwxMy44MjRjMC41MTIsMTEuMjY0IDEuNTM2LDI2LjExMiAzLjA3MiwzMi43NjhjMi4wNDgsMTAuMjQgNS4xMiwxOS45NjggOS4yMTYsMjcuNjQ4YzQuNjA4LDkuNzI4IDEwLjc1MiwxNy45MiAxNy45MiwyNS4wO' +
                            'DhjNy42OCw3LjY4IDE1Ljg3MiwxMy44MjQgMjUuNiwxOC40MzJjNy42OCw0LjA5NiAxNy40MDgsNy4xNjggMjcuNjQ4LDkuMjE2YzYuNjU2LDEuNTM2IDIxLjUwNCwyLjU2IDMyLjc2OCwyLjU2YzQuNjA4LDAuNTEyIDEwLjc1Miww' +
                            'LjUxMiAxMy44MjQsMC41MTJsMjUxLjkwNCwwbDEzLjgyNCwwYzExLjI2NCwtMC41MTIgMjYuMTEyLC0xLjUzNiAzMi43NjgsLTMuMDcyYzEwLjI0LC0yLjA0OCAxOS45NjgsLTUuMTIgMjcuNjQ4LC05LjIxNmM5LjcyOCwtNC42MDg' +
                            'gMTcuOTIsLTEwLjc1MiAyNS4wODgsLTE3LjkyYzcuNjgsLTcuNjggMTMuODI0LC0xNS44NzIgMTguNDMyLC0yNS42YzQuMDk2LC03LjY4IDcuMTY4LC0xNy40MDggOS4yMTYsLTI3LjY0OGMxLjUzNiwtNi42NTYgMi41NiwtMjEuNT' +
                            'A0IDIuNTYsLTMyLjc2OGMwLjUxMiwtNC42MDggMC41MTIsLTEwLjc1MiAwLjUxMiwtMTMuODI0bDAsLTI2NS43MjljLTAuNTEyLC0xMS4yNjQgLTEuNTM2LC0yNi4xMTIgLTMuMDcyLC0zMi43NjhjLTIuMDQ4LC0xMC4yNCAtNS4xM' +
                            'iwtMTkuOTY4IC05LjIxNiwtMjcuNjQ4Yy00LjYwOCwtOS43MjggLTEwLjc1MiwtMTcuOTIgLTE3LjkyLC0yNS4wODhjLTcuNjgsLTcuNjggLTE1Ljg3MiwtMTMuODI0IC0yNS42LC0xOC40MzJjLTcuNjgsLTQuMDk2IC0xNy40MDgs' +
                            'LTcuMTY4IC0yNy42NDgsLTkuMjE2Yy02LjY1NiwtMS41MzYgLTIxLjUwNCwtMi41NiAtMzIuNzY4LC0yLjU2Yy00LjYwOCwtMC41MTIgLTEwLjc1MiwtMC41MTIgLTEzLjgyNCwtMC41MTJsLTI2NS43MjgsMFoiIHN0eWxlPSJmaWx' +
                            'sOnVybCgjX0xpbmVhcjEpO2ZpbGwtcnVsZTpub256ZXJvOyIvPjxwYXRoIGQ9Ik0zNDQuNzU0LDI4OS42OThjLTQuNTYsLTIuMjgyIC0yNi45OCwtMTMuMzExIC0zMS4xNjEsLTE0LjgzMmMtNC4xOCwtMS41MjEgLTcuMjE5LC0yLj' +
                            'I4MiAtMTAuMjU5LDIuMjgyYy0zLjA0MSw0LjU2NCAtMTEuNzgsMTQuODMyIC0xNC40NCwxNy44NzVjLTIuNjYsMy4wNDIgLTUuMzIsMy40MjMgLTkuODgsMS4xNGMtNC41NjEsLTIuMjgxIC0xOS4yNTQsLTcuMDk1IC0zNi42NzIsL' +
                            'TIyLjYyN2MtMTMuNTU2LC0xMi4wODcgLTIyLjcwOSwtMjcuMDE3IC0yNS4zNjksLTMxLjU4MWMtMi42NiwtNC41NjQgLTAuMjgzLC03LjAzMSAyLC05LjMwNGMyLjA1MSwtMi4wNDEgNC41NiwtNS4zMjQgNi44NCwtNy45ODZjMi4y' +
                            'OCwtMi42NjIgMy4wNCwtNC41NjQgNC41NiwtNy42MDZjMS41MiwtMy4wNDIgMC43NiwtNS43MDUgLTAuMzgsLTcuOTg3Yy0xLjE0LC0yLjI4MiAtMTAuMjYsLTI0LjcyIC0xNC4wNiwtMzMuODQ4Yy0zLjcwMSwtOC44ODkgLTcuN' +
                            'DYxLC03LjY4NiAtMTAuMjYsLTcuODI2Yy0yLjY1NywtMC4xMzIgLTUuNywtMC4xNiAtOC43NCwtMC4xNmMtMy4wNDEsMCAtNy45OCwxLjE0MSAtMTIuMTYxLDUuNzA0Yy00LjE4LDQuNTY0IC0xNS45NiwxNS41OTQgLTE1Ljk2LDM' +
                            '4LjAzMmMwLDIyLjQzOCAxNi4zNCw0NC4xMTYgMTguNjIsNDcuMTU5YzIuMjgxLDMuMDQzIDMyLjE1Nyw0OS4wODkgNzcuOTAyLDY4LjgzNmMxMC44OCw0LjY5NyAxOS4zNzQsNy41MDEgMjUuOTk3LDkuNjAzYzEwLjkyNCwzLjQ2OS' +
                            'AyMC44NjYsMi45OCAyOC43MjMsMS44MDZjOC43NjEsLTEuMzA5IDI2Ljk4LC0xMS4wMjkgMzAuNzgxLC0yMS42NzdjMy43OTksLTEwLjY0OSAzLjc5OSwtMTkuNzc3IDIuNjU5LC0yMS42NzhjLTEuMTM5LC0xLjkwMiAtNC4xNzksL' +
                            'TMuMDQzIC04Ljc0LC01LjMyNW0tODMuMjA3LDExMy41NzNsLTAuMDYxLDBjLTI3LjIyLC0wLjAxMSAtNTMuOTE3LC03LjMyIC03Ny4yMDcsLTIxLjEzN2wtNS41MzksLTMuMjg3bC01Ny40MTMsMTUuMDU2bDE1LjMyNSwtNTUuOTU5' +
                            'bC0zLjYwOCwtNS43MzZjLTE1LjE4NCwtMjQuMTQ1IC0yMy4yMDMsLTUyLjA1MSAtMjMuMTkyLC04MC43MDRjMC4wMzMsLTgzLjYxMSA2OC4wODMsLTE1MS42MzUgMTUxLjc1NiwtMTUxLjYzNWM0MC41MTcsMC4wMTYgNzguNjAzLDE1' +
                            'LjgxMSAxMDcuMjQzLDQ0LjQ3NGMyOC42NCwyOC42NjMgNDQuNDA0LDY2Ljc2NCA0NC4zODksMTA3LjI4M2MtMC4wMzUsODMuNjE3IC02OC4wODMsMTUxLjY0NSAtMTUxLjY5MywxNTEuNjQ1bTEyOS4xMDIsLTI4MC43MDljLTM0Lj' +
                            'Q1NywtMzQuNDg2IC04MC4yODEsLTUzLjQ4NyAtMTI5LjEwMywtNTMuNTA3Yy0xMDAuNTk1LDAgLTE4Mi40NjgsODEuODQxIC0xODIuNTA4LDE4Mi40MzdjLTAuMDEzLDMyLjE1NiA4LjM5LDYzLjU0NiAyNC4zNjEsOTEuMjEybC0y' +
                            'NS44OTIsOTQuNTQ1bDk2Ljc1LC0yNS4zN2MyNi42NTcsMTQuNTM1IDU2LjY3LDIyLjE5NCA4Ny4yMTYsMjIuMjA3bDAuMDc1LDBjMTAwLjU4NiwwIDE4Mi40NjUsLTgxLjg1MiAxODIuNTA2LC0xODIuNDQ4YzAuMDE5LC00OC43NTE' +
                            'gLTE4Ljk0NiwtOTQuNTkgLTUzLjQwNSwtMTI5LjA3NiIgc3R5bGU9ImZpbGw6I2ZmZjsiLz48L2c+PGRlZnM+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMCwtNTEyLC01MTIsMCwyNTYuMDAxLDUxM' +
                            'ikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iX0xpbmVhcjEiIHgxPSIwIiB4Mj0iMSIgeTE9IjAiIHkyPSIwIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMyNWNmNDM7c3RvcC1vcGFjaX' +
                            'R5OjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiM2MWZkN2Q7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4='} alt={'whatsapp call link'}/>
                            </a>
                        </li>
                        <li>
                            <a href={'https://www.facebook.com/aleksey.vasiliev.5437/'} target={'_blank'} rel="noopener noreferrer">
                            <img className={'social'} src={'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcm' +
                            'cvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsa' +
                            'W1pdDoyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2VyaWY9Imh0dHA6' +
                            'Ly93d3cuc2VyaWYuY29tLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik00NDkuNDQ2LDBjMzQuNTI1LDAgNjIuNTU0LDI4LjAzIDYyLjU1NCw2Mi41NTRsMCwzODYuODkyYzAsMzQ' +
                            'uNTI0IC0yOC4wMyw2Mi41NTQgLTYyLjU1NCw2Mi41NTRsLTEwNi40NjgsMGwwLC0xOTIuOTE1bDY2LjYsMGwxMi42NzIsLTgyLjYyMWwtNzkuMjcyLDBsMCwtNTMuNjE3YzAsLTIyLjYwMyAxMS4wNzMsLTQ0LjYzNiA0Ni41OCwtNDQ' +
                            'uNjM2bDM2LjA0MiwwbDAsLTcwLjM0YzAsMCAtMzIuNzEsLTUuNTgyIC02My45ODIsLTUuNTgyYy02NS4yODgsMCAtMTA3Ljk2LDM5LjU2OSAtMTA3Ljk2LDExMS4yMDRsMCw2Mi45NzFsLTcyLjU3MywwbDAsODIuNjIxbDcyLjU3Myw' +
                            'wbDAsMTkyLjkxNWwtMTkxLjEwNCwwYy0zNC41MjQsMCAtNjIuNTU0LC0yOC4wMyAtNjIuNTU0LC02Mi41NTRsMCwtMzg2Ljg5MmMwLC0zNC41MjQgMjguMDI5LC02Mi41NTQgNjIuNTU0LC02Mi41NTRsMzg2Ljg5MiwwWiIgc3R5bGU' +
                            '9ImZpbGw6IzE3NzdmMjsiLz48L3N2Zz4='} alt={'facebook link'}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </article>
            <article className={'contact_me'}>
                <h1>{store.contacts.contact.name}</h1>
                <div>
                    <form>
                        <div>
                            <ul className={'contact_me_ul'}>
                                <li>
                                    <label className={'contacts_label'}>{store.contacts.contact.nameForm}<span className={'contacts_label_span'}>({store.contacts.contact.required})</span></label>
                                    <div>
                                        <input className={'inputForm'} type={'text'} required={true}/>
                                    </div>
                                </li>
                                <li>
                                    <label className={'contacts_label'} >{store.contacts.contact.email}<span className={'contacts_label_span'}>({store.contacts.contact.required})</span></label>
                                    <div>
                                        <input className={'inputForm'} type={'email'} required={true}/>
                                    </div>
                                </li>
                                <li>
                                    <label className={'contacts_label'} >{store.contacts.contact.phone}</label>
                                    <div>
                                        <input className={'inputForm'} type={'phone'}/>
                                    </div>
                                </li>
                                <li>
                                    <label className={'contacts_label'}>{store.contacts.contact.message}<span className={'contacts_label_span'}>({store.contacts.contact.required})</span></label>
                                    <div>
                                        <textarea className={'textareaForm'} type={'text'} rows={'10'} cols={'50'} required={true}/>
                                    </div>
                                </li>
                            </ul>
                            <button type={'submit'} className={'submit_contact'}>{store.contacts.contact.button}</button>
                        </div>
                    </form>
                </div>
            </article>
        </div>
    )
}

export default ContactsView
