import React from 'react';
import Link from 'next/link';

const CashFlowContent = () => {
    return (
        <div className="growth-tips">
            <div className="container">
        
                    <div className="section-title header-padding">
                        <h2>Cashflow – Major Success factor in Business
                        </h2>
                        <div className="bar"></div>
                    </div>
                    <div className="projects-details-desc">
                                <h3>As always, the wisdom of Mark Twain is so true even in this sense. But a small caveat for contemporary scenario : Revenue is Vanity; Profit is Sanity”. But cash is reality!
                                </h3>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="features-text">
                                <h4><i className="flaticon-tick"></i> Cashflow importance as viewed by CEOs
                                </h4>
                                <p>Consider the following key facts and 
                                findings about Cash flow - stated 
                                by CEOs, Business owners & Analysts in 
                                Metadata analysis. This holds good for companies 
                                of all sizes, and cuts across industries and sectors.                            
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq-image">
                                <img src={require("../../images/innovation/innov-2.png")} alt="image" />
                            </div>
                        </div>
                    </div>

            <div className="col-lg-12 col-md-12">
                <div className="projects-details-desc">
                    <div className="features-text">
                        <h4><i className="flaticon-tick"></i> What is Cash flow then?
                        </h4>
                        <p>Cash flow is the inflow and outflow of money from a business. It is necessary in general to manage operating costs. Positive cash flow indicates that a company’s’ liquid assets are increasing, which enables it to reinvest free cash flow in its business, besides providing a buffer against future financial challenges. Negative cash flow indicates that a company's liquid assets are decreasing.
                        </p>

                        <p>The cash flow statement is believed to be the most intuitive of all the budget summaries since it follows the money made by the business in three primary ways—through operations, investment, and financing. The sum of these three segments is known as net cash flow.
                        </p>
                    </div>

                    <div className="features-text">
                        <h4><i className="flaticon-tick"></i> Better Cashflow Management – Key Success factor for any business
                        </h4>
                        <p>Why so much fuss about Cashflow? It’s enough if companies manage to achieve profitable revenue growth, right?
                        </p>
                    </div>
                    <div className="features-text custom-spacing"><h4>Wrong!!</h4></div>
                    <p>Consider the following:
                    </p>
                    <div className="custom-spacing">
                        <ul>
                            <li>A Business is successful if the cash it generates exceeds the cash it consumes
                            </li>
                            <li>Poor cash flow management is the biggest reason why small business fail</li>
                            <li>Cash flow determines Liquidity of the business
                            </li>
                            <li>Cash Flow is as important, as profit. Perhaps more in some cases!
                            </li>
                            <li>Cashflow drives everyday operations and purchasing power
                            </li>
                            <li>Without cash flow, even profitable business with revenue growth, best of both worlds, could go bankrupt!! </li>
                            <li>The faster you grow; more financing is required. Growth costs cash!</li>
                            <li>When cash flow is freed, business owners can focus on growing the enterprise</li>
                        </ul>
                    </div>
                </div>
            </div>
        
            <div className="col-lg-12 col-md-12">
            <div className="projects-details-desc">
                    <h3>Advantages of Cash flow statement
                    </h3>
        
                <div className="features-text">
                    <h4><i className="flaticon-tick"></i> Verifying Profitability and Liquidity Positions
        
                    </h4>
                    <p>Cash Flow Statement helps the management to ascertain the liquidity and profitability position of businesses. 
                    </p>
                </div>
        
                <div className="features-text">
                <h4><i className="flaticon-tick"></i> Verifying Capital Cash Balance
        
                </h4>
                <p>It is possible for businesses to verify the idle and/or excess and/or shortage of cash position if capital cash balance is determined.
                </p>
            </div>
        
            <div className="features-text">
                <h4><i className="flaticon-tick"></i> Cash Management
                </h4>
                <p>If the Cash Flow Statement is properly prepared, it becomes easy for business to manage the cash. The management can prepare an estimate about future plans.
                </p>
            </div>
        
        
            <div className="features-text">
                <h4><i className="flaticon-tick"></i> Planning and Coordination
                </h4>
                <p>Cash Flow Statement helps the management to understand how much funds are needed and for what purposes, how much cash is generated from internal sources, how much cash can be procured from outside the business. It also helps to prepare cash budgets
                </p>
            </div>
        
        </div>
        </div>

        <div className="col-lg-12 col-md-12">
            <div className="projects-details-desc">
                    <h3>Holistic cash flow Management:
                    </h3>
                    <p>Though Cash flow is the key success factor, it should not be considered in isolation, and holistic Approach with the overall objective of the company need to the backdrop. The following are few pointers in order to achieve the said objective:
                    </p>
                <div className="features-text custom-spacing">
                    <ul>
                        <li>Turn financial data into actionable insights</li>
                        <li>Shorten Cash conversion cycle</li>
                        <li>Negotiate payment terms; Align Accounts receivables to that of Accounts Payable</li>
                        <li>Determine biggest fixed expenses and ways to reduce/realign</li>
                        <li>Pay importance to cash cycle</li>
                        <li>Improve the customer experience- from consumption till payment</li>
                        <li>Work with right set of customers, who are just profitable, but pay on time too!</li>
                        <li>Note that Each rupee pending in receivable is a rupee less available for business </li>
                        <li>Reduce carrying cost – by managing inventory optimally</li>
                        <li>Determine the cost of capital and try different payable/receivable matrix</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default CashFlowContent;