import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#fcdf03"}}>
                    <div className="container-fluid">

                        <select className="form-select form-select-lg " aria-label=".form-select-lg example" name='selectCoin'
                            style={{ width: "fit-content" }} onChange={this.props.handle_Submit}>
                            <option value="bitcoin">Select Coin</option>
                            <option value="avalanche-2">Avalanche (AVAX)</option>
                            <option value="binancecoin">Binance (BNB)</option>
                            <option value="bitcoin">Bitcoin (BTC) </option>
                            <option value="cardano">Cardano (ADA)</option>
                            <option value="decentraland">Decentraland (MANA)</option>
                            <option value="dogecoin">Dogecoin (DOGE)</option>
                            <option value="ethereum">Ethereum (ETH)</option>
                            <option value="ripple">Ripple (XRP)</option>
                            <option value="solana">Solana (SOL)</option>
                            <option value="tether">Tether (USDT)</option>
                        </select>

                        <a className="navbar-brand d-flex ml-auto display-2 text-dark fs-2 fw-bold text-uppercase "
                            style={{ fontFamily: 'NHaasGroteskDSPro-65Md'}} href="/"> <img class="object-cover h-5 lg:h-6" src="data:image/png;base64,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" alt="Almabetter Logo"></img> Crypto 
                            Dashboard</a>

                    </div>
                </nav>
            </div>
        )
    }
}

export default Header