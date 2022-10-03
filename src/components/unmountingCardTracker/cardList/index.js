import { Component } from "react";

import CardFrame from '../cardFrame'

const data = [ // read-only
    {
        cardN:1,
        unmount:0,
    },
    {
        cardN:2,
        unmount:0,
    },
    {
        cardN:3,
        unmount:0,
    },
    {
        cardN:4,
        unmount:0,
    },
    {
        cardN:5,
        unmount:0,
    },
    
]

class CardList extends Component {
    constructor() {
        super();
        this.state = {
            cardsData: [...data],
            reportVisible: false,
        }
    }
    
    handleCardUnmounted = (cardNumber) => {
        const {cardsData} = this.state;
        this.setState({
            cardsData: cardsData.map(item => {
                if(item.cardN === cardNumber) {
                    item.unmount += 1;
                }
                return item;
            })
        })
    }

    handleReportVisible = () => {
        this.setState({
            reportVisible: !this.state.reportVisible,
        })
    }

    render() {
        const {cardsData, reportVisible} = this.state;
        return(<>
                <h1>Cards` unmount counter</h1>
                <div className="container">
                    {cardsData.map(item => {
                    return(
                        <CardFrame 
                            key={item.cardN} 
                            cardN={item.cardN}
                            handleCardUnmounted= {this.handleCardUnmounted}
                        />
                        )
                    })}
                    <button onClick={this.handleReportVisible} className="report">
                        {reportVisible? 
                            "Hide report" 
                            :
                            "Get report"
                        }
                        </button>
                </div>

                {reportVisible && <div className="reportContainer">
                     <h2>Report</h2>
                     {cardsData.map(item => {
                        return (
                            <p className="reportInfo" key={item.cardN}>
                                Card number {item.cardN}, unmounted {item.unmount} tiems
                            </p>
                        )
                     })}
                    </div>}
                
            </>)
    }
}

export default CardList;