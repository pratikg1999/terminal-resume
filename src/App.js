import './App.css';
import React from "react";
// import { renderIntoDocument } from 'react-dom/test-utils';


class App extends React.Component {

  // Global command functions


  fun_cd = (inp) => {
    let [command, ...args] = inp.split(' ');
    let newCurDir = this.state.curDir;
    if (args.length > 1) {
      return {output:"Invalid command"};
    }
    else if(args.length === 0){
      newCurDir = "/home";
    }
    else{
      args = args[0].trim();
      if (args == "..") {
        newCurDir = this.state.curDir.substring(0, this.state.curDir.lastIndexOf("/")) || "/";
      }
      else if (args == "/") {
        newCurDir = args;
      }
      else {
        if(args[args.length-1] === "/"){
          args = args.substr(0, args.length-1);
        }
        if (args[0] === "/") {
          newCurDir = args;
        }
        else{
          if(newCurDir === "/"){
            newCurDir = this.state.curDir + args;
          }
          else{
            newCurDir = this.state.curDir + "/" + args;
          }
        }
      }
    }
    // this.setState((prevState, props)=>{
    //   return {
    //     curDir : newCurDir,
    //   }
    // })
    return {output: "Changing dir to "+newCurDir, stateVars:{curDir: newCurDir}};
  }

  constructor(props) {
    super(props);
    // delete props.commands["help"]; // not-working
    console.log(props.commands);
    props.commands["cd"] = this.fun_cd;
    let fun_help = (inp)=>{
      let res = "Enter one of the following commands with optional args:\n";
      for(let command in props.commands){
        if(command!=="help"){
          res+=command+"\n";
        }
      }
      res+="help";
      return {output:res};
    }
    props.commands["help"] = fun_help;
    if (props.invalidOutput === undefined) {
      this.invalidOutput = "Please enter one of the following commands\n";
      for (let command in props.commands) {
        this.invalidOutput += command + "\n";
      }
    }
    else {
      this.invalidOutput = props.invalidOutput;
    }
  }


  state = {
    username: "pratik",
    system: "pratik-Predator-G3-572",
    curDir: "/home",
    userSysColor: "#00ff00",
    curDirColor: "#0000ff",
    prompt: "$",
    history: [
      // {
      //   curDir: "/home",
      //   prompt: "$",
      //   inp: "help",
      //   out: "Enter commands like\nResume\nAbout"
      // },
      // {
      //   curDir: "/home",
      //   prompt: "$",
      //   inp: "About",
      //   out: "I m pratik Gupta.... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      // }
    ],
  };

  newInpRef = React.createRef(null);

  componentDidMount() {
    this.newInpRef.current.focus();
    this.takeNewInput("help");
  }

  componentDidUpdate() {
    this.newInpRef.current.textContent = this.newInpRef.current.innerText = "";
    this.newInpRef.current.focus();
    console.log("<" + this.newInpRef.current.textContent + ">");
  }

  takeNewInput = (newInput) => {
    // const newInput = this.newInpRef.current.textContent;
    const newCommand = newInput.split(' ')[0];
    let newOut, stateVars, callback;
    if(this.props.commands[newCommand] === undefined){
      newOut = this.invalidOutput;
    }
    else{
      ({output:newOut, stateVars, callback} = this.props.commands[newCommand](newInput));
    }
    // if (newOut === undefined) {
    //   newOut = this.invalidOutput;
    // }
    this.setState((prevState, props) => {
      const newHist = [...prevState.history];
      newHist.push({
        curDir: prevState.curDir,
        prompt: prevState.prompt,
        inp: newInput,
        out: newOut
      });
      return {
        ...stateVars,
        history: newHist,
      }
    });
    if(callback){
      callback();
    }
  }

  render() {
    return (
      <div className="App">
        <div className="history">
          {this.state.history.map((hist, ind) => {
            return (
              <div className="group" key={ind}>
                <p className="first-line">
                  <span className="username" style={{color:this.state.userSysColor}}>{this.state.username}@</span>
                  <span className="system" style={{color:this.state.userSysColor}}>{this.state.system}</span>
                  <span>:</span>
                  <span className="curDir" style={{color:this.state.curDirColor}}>{hist.curDir}</span>
                  <span className="prompt">{hist.prompt} </span>
                  <span className="inp">{hist.inp}</span>
                </p>
                <p className="second-line">
                  {hist.out}
                </p>
              </div>
            )
          })}
        </div>
        <div className="new">
          <p className="first-line">
            <span className="username" style={{color:this.state.userSysColor}}>{this.state.username}@</span>
            <span className="system" style={{color:this.state.userSysColor}}>{this.state.system}</span>
            <span>:</span>
            <span className="curDir" style={{color:this.state.curDirColor}}>{this.state.curDir}</span>
            <span className="prompt">{this.state.prompt} </span>
            <span id="new-inp" ref={this.newInpRef} contentEditable="true" onKeyDown={(e) => {
              if (e.key === "Enter") {
                this.takeNewInput(e.target.textContent);
              }
            }}></span>
          </p>
        </div>
      </div>
    )
  }
}

export default App;
