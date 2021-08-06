import React from 'react'

class MemeGenerator extends React.Component {
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
          .then(response => response.json())
          .then(response => {
              const {memes} = response.data
              this.setState({ allMemeImgs: memes})
          } 
             
            )        
      }

    
    handleChange(event) {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        })
    }
    
    render(){
        return(
            <>
            <form className="meme-form">
                <input placeholder="Top Text" name="topText" onChange={this.handleChange}/>
                <input placeholder="Bottom Text" name="bottomText" onChange={this.handleChange}/>

                <button>Gen</button>
            </form>
            <div className="meme">
                <img src={this.state.randomImg} alt="" />
                <h2 className="top">{this.state.topText}</h2>
                <h2 className="bottom">{this.state.bottomText}</h2>
            </div>
            </>
        )
    }
}

export default MemeGenerator