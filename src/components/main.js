import React from 'react';
import * as d3 from "d3";
import Californiabeer from './../data/Californiabeer.csv';
import Californiacompany from './../data/Californiacompany.csv';

class Main extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            data: null,
            current: 0
        }
        this.drawChart = this.drawChart.bind(this);
        this.updateChart = this.updateChart.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
	componentDidMount() {
		// const {company} = this.props;

  // 		console.log(company );
	    this.drawChart();

	}
	drawChart() {
		console.log(this.props);
		const {data} = this.props;
		const {company} = this.props;
	  	const waffle = d3.select('.waffle');
        const caption = d3.select('#caption');

        // d3.csv(Californiabeer).then(function(data) { console.log(data); });
        // if(data) {
        Promise.all([
		    d3.csv(Californiabeer),
		    d3.csv(Californiacompany),
		]).then(function([data,company]) {
	
        // d3.csv(Californiabeer).then(function(data) { 
        
            let companies = [...new Set(data.map(d=>d.Company))]
            let myColors = d3.quantize(d3.interpolateHcl("#f4e153", "#362142"), companies.length);
            let companyLinear = d3.scaleOrdinal()
                .domain(companies)
                .range(myColors)

            waffle
                .selectAll('.block')
                .data(data)
                .enter()
                .append('div')
                .attr('class', 'block')
                .attr('id', (d,index )=> index)
                .style('background-color', d => (companyLinear(d.Company)))
                .on('mouseover', function(e,d){
   
                    let html = '';
                    html = 'X | ABV: ' + d.ABV + '<br />';
                    html += 'Y | Company: ' + d.Company + '<br />';
                    html += 'R | Ratings: ' + d.Ratings + '<br />';
                    html += 'C | sorted: ' + d.sorted;
                    d3.select('#beerCurrent')
                        .html(html)
                        .style('left', d.screenX - 100)
                        .style('top', d.screenY - 150)
                        .style('opacity', 0.85);

                    
                    
                    

                    
                })
                .on('mouseout', function(){
                    d3.select('#beerCurrent')
                        .style('left', -1000)
                        .style('opacity', 0);

                    // d3.select('#beerCompany')
                    //     .style('opacity', 0);
                })
                .on('click', function(x,e){
                    let item = company.filter(c=>{
                    	// console.log(c.name,d.Company);
                    	return c.name ===e.Company
                    });
                    item = item[0];
                    console.log(item)
                    let html2 = '';
                    html2 = '<h3>' + item.name + '</h3>';
                    html2 += `<a href='${item.website}'>${item.website}</a>`;
                    html2 += '<p>Address: ' + item.address + '</p>';
                    // html2 += 'sorteitem: ' + item.sorted;
                   	console.log(html2);
                   	d3.select('#beerCompany .col-3')
                        .html(`<img src="${process.env.PUBLIC_URL}/beerLogo/${item.logo}" alt="" />`)
                    d3.select('#beerCompany .col-9')
                        .html(html2)
                    
                    d3.selectAll('.block')
                        .data(data)
                        .style('background-color', d=>{
                            if(d.Company===e.Company)
                                return companyLinear(d.Company)
                            else 
                                return "rgba(255,255,255,0.2)"
                        })


                })
        })
        // }
  	}
  	updateChart(linear, parse) {
  		const {data} = this.props;


  		const waffle = d3.select('.waffle');
        const caption = d3.select('#caption');

        waffle
            .selectAll('.block')
            .data(data)
            .style('background-color', d => (linear(parse(d))))
  	}
  	handleChange(element) {
		
		const {data} = this.props;
		let linear = null;
		let	parse = null;

		console.log(element,data);

		switch (element) {
			case 'popularity':
				let popularityMinMax = d3.extent(data,function(d){
	                return parseInt(d.Ratings.replace(",",""));
	            });
				linear = d3.scaleSequential()
					.domain([popularityMinMax[0],popularityMinMax[1]])
				  	.interpolator(d3.interpolateHcl("#f4e153", "#362142"));
				parse = e=>parseInt(e.Ratings.replace(",",""));
				break;
			case 'ABV':
				let ABVMinMax = d3.extent(data,function(d){
	                return parseFloat(d.ABV);
	            });
	            console.log(ABVMinMax);
	            linear = d3.scaleSequential()
					.domain([ABVMinMax[0],ABVMinMax[1]])
				  	.interpolator(d3.interpolateHcl("#f4e153", "#362142"));
				parse = e=>parseFloat(e.ABV);
				break;
			case 'Company':
				let companies = [...new Set(data.map(d=>d.Company))]
	            let myColors = d3.quantize(d3.interpolateHcl("#f4e153", "#362142"), companies.length);
	            linear = d3.scaleOrdinal()
	                .domain(companies)
	                .range(myColors)
	            parse = e=>e.Company
				break;
			default:
				console.log("default");
		}

		this.updateChart(linear, parse)
		

		
  	}
  	render() {
  		console.log(this.props);
  		const {company} = this.props;
  		if(company)
  			console.log(company,company[this.state.current].logo);
		return (
			<div>
				<header>
					<h1>Top 100 Rated Beers In California</h1>
				</header>
				<div className="grid">
					<div className="col-8">
						<h2>Top 100 Beers Charts</h2>
						<div className="grid  waffle-box">
							<div className="col-1">
								<h3>Ranking</h3>
							</div>
							<div className="col-11">
								<div>
									<button className="btn active" onClick={e=>this.handleChange("Company")}>Company</button>
							        <button className="btn" onClick={e=>this.handleChange("popularity")}>Popularity</button>
							        <button className="btn" onClick={e=>this.handleChange("ABV")}>ABV</button>
							    </div>
						    </div>
						    <div className="col-1">
								<p>1-20</p>
								<p>21-40</p>
								<p>41-60</p>
								<p>61-80</p>
								<p>81-100</p>
							</div>
							<div className="col-11">
						    	<figure className="waffle"></figure>
						    </div>
						</div>
						
					</div>
					<div className="col-4">
						
					</div>


					<div className="col-8">
						<h2>Current Selected Beer</h2>
						<div id="beerCurrent"></div>
					</div>
					<div className="col-4">
						<h2>Current Selected Beer Company</h2>
						<div id="beerCompany" className="grid">
							<div className="col-3 flex-center">
							</div>
							<div className="col-9">
							</div>
						</div>
					</div>

				</div>
			</div>
		)
	}
}
export default Main;