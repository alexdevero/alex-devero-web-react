import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

// Import context and provider
import { MyContext } from 'context'

// Import translations
import * as translationCZ from 'translations/cz'
import * as translationEN from 'translations/en'

import './Home.css'

import { H1, H2, H3 } from 'app/atoms/Typography'

const randomness = 90;
const threshold = 285;
const anim_duration = 900; //1000 = 1s
const randomness2 = 320;
const threshold2 = 700;
const anim_duration2 = 900; //1000 = 1s
const randomness3 = 320;
const threshold3 = 700;
const anim_duration3 = 900; //1000 = 1s

const HomeWrapper = styled.div`
  position: relative;
`

const rotate = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
    border-top-left-radius: ${String(Math.round((Math.random()*randomness + threshold)) + 'px')};
    border-top-right-radius: ${String(Math.round((Math.random()*randomness + threshold)) + 'px')};
    border-bottom-left-radius: ${String(Math.round((Math.random()*randomness + threshold)) + 'px')};
    border-bottom-right-radius: ${String(Math.round((Math.random()*randomness + threshold)) + 'px')};
  }

  100% {
    transform: translate(-50%, -50%) rotate(359deg);
    border-top-left-radius: ${String(Math.round((Math.random()*randomness + threshold)) + 'px')};
    border-top-right-radius: ${String(Math.round((Math.random()*randomness + threshold)) + 'px')};
    border-bottom-left-radius: ${String(Math.round((Math.random()*randomness + threshold)) + 'px')};
    border-bottom-right-radius: ${String(Math.round((Math.random()*randomness + threshold)) + 'px')};
  }
`

const Bubble = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: -200;
  display: inline;
  width: 650px;
  height: 650px;
	border: #273040 solid 2px;
	box-shadow: inset 0px 0px 40px rgba(0,0,0,.2), 0 0 90px rgba(0,0,0,.8);
  animation: ${rotate} 16s infinite;
  transform: translate(-50%, -50%)
`

const BubbleBig = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 auto 0 auto;
  width: 300px;
  height: 300px;
  background-color: ${props => props.theme.colorRed};
  animation: ${rotate} 18s infinite;
  transform: translate(-50%, -50%);
`

class Home extends Component {
  state = {
    lang: this.context.language
  }

  // animate() {
  //   setInterval({
  //     this.styles.
  //     borderTopLeftRadius: String(Math.round((Math.random()*randomness2 + threshold2)) + 'px'),
  //     borderTopRightRadius:  String(Math.round((Math.random()*randomness2 + threshold2)) + 'px'),
  //     borderBottomLeftRadius:  String(Math.round((Math.random()*randomness2 + threshold2)) + 'px'),
  //     borderBottomRightRadius:  String(Math.round((Math.random()*randomness2 + threshold2)) + 'px'),
  //   }, 1000)
  // }

  render() {
    return (
      <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <HomeWrapper className="home">
                <div className="home-header">
                  <H1>{context.state.language === 'en' ? translationEN.home.h1 : translationCZ.home.h1}</H1>

                  <H2>{context.state.language === 'en' ? translationEN.home.h2 : translationCZ.home.h2}</H2>

                  <H3>{context.state.language === 'en' ? translationEN.home.h3 : translationCZ.home.h3}</H3>
                </div>

                <Bubble >
                  <BubbleBig />
                </Bubble>
              </HomeWrapper>
            </React.Fragment>
          )}
      </MyContext.Consumer>
    )
  }
}

export default Home
