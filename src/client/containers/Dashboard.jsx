import React, { useState, useEffect } from 'react';
import axios from 'axios';
import options, { optionsClassname } from '../constants/dashboardOptions';
import { ErrorPage, OneDayChart, OneWeekChart, OneDayPieChart } from '../componentImports';

function Dashboard({ chartData }) {
	const [selectValue, setSelectValue] = useState('day');
	let displayedChart1 = <OneDayChart name={'Total Investments'} chartData={chartData} />;
	let displayedChart2 = <OneDayChart name={'BTC'} chartData={chartData} />;
	let displayedChart3 = <OneDayPieChart chartData={chartData} />;
	let currPrice = chartData.prices ? '$' + new Intl.NumberFormat().format(chartData.prices[chartData.prices.length - 1]) : '';

	const handleSelectValueChange = (e) => setSelectValue(e.target.value);

	if (selectValue === 'day') {
		displayedChart1 = <OneDayChart name={'Total Investments'} labelName={'Last 24 Hours'} chartData={chartData} />;
		displayedChart2 = <OneDayChart name={'BTC'} labelName={'BTC Prices Last 24 Hours'} chartData={chartData} />;
	} else if (selectValue === 'week') {
		displayedChart1 = <OneWeekChart name={'Total Investments'} labelName={'Last 24 Hours'} chartData={chartData} />;
		displayedChart2 = <OneWeekChart name={'Total Investments'} chartData={chartData} />;
	} else {
		displayedChart1 = <ErrorPage />;
		displayedChart2 = <ErrorPage />;
	}

	return (
		<div className="">
			<div className="relative w-full h-full px-6 pt-6 overflow-y-auto bg-gray-50 lg:ml-60" >
				{/* CARD HOLDING CHART */}
				<div className="p-4 mb-6 bg-white border border-gray-200 rounded-lg shadow-sm two-column-grid sm:p-6">
					<div className="flex-shrink-0">
						<span className="text-xl font-bold leading-none text-gray-900 sm:text-2xl">{currPrice}</span>
						<h3 className="text-base font-light text-gray-500 dark:text-gray-400">Investments</h3>
					</div>

					<div className="flex items-center justify-end flex-1 text-base font-medium text-green-500">
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
						</svg>
					</div>

					{/* CHART */}
					<div id="main-chart" style={{ maxHeight: '435px' }} className="grid grid-cols-2 gap-8">
						<div className="p-6">{displayedChart1}</div>
						<div style={{ maxHeight: '450px' }} className="p-8">
							<OneDayPieChart />
						</div>
					</div>

					{/* <!-- Card Footer --> */}
					<div className="flex items-center justify-between pt-3 mt-4 border-t sm:pt-6">
						<div>
							{/* <!-- Dropdown menu --> */}
							<select name="" id="" value={selectValue} onChange={handleSelectValueChange} className="z-50 py-1 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow">
								{options.map((opt) => {
									return (
										<option className={optionsClassname} key={opt.val} value={opt.val}>
											{opt.label}
										</option>
									);
								})}
							</select>
						</div>
					</div>
				</div>

				<div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm two-column-grid sm:p-6">{displayedChart2}</div>
			</div>
		</div>
	);
}

export default Dashboard;
