import { chartAreaGradient } from '../../../../../../Documents/mosaicreact/mosaic-react/src/charts/ChartjsConfig.jsx';
import LineChart from '../../../../../../Documents/mosaicreact/mosaic-react/src/charts/LineChart03.jsx';

// Import utilities
import { hexToRGB, tailwindConfig } from '../../../../../../Documents/mosaicreact/mosaic-react/src/utils/Utils.js';

function AnalyticsCard01() {
    const chartData = {
        labels: [
            '12-01-2022',
            '01-01-2023',
            '02-01-2023',
            '03-01-2023',
            '04-01-2023',
            '05-01-2023',
            '06-01-2023',
            '07-01-2023',
            '08-01-2023',
            '09-01-2023',
            '10-01-2023',
            '11-01-2023',
            '12-01-2023',
            '01-01-2024',
            '02-01-2024',
            '03-01-2024',
            '04-01-2024',
            '05-01-2024',
            '06-01-2024',
            '07-01-2024',
            '08-01-2024',
            '09-01-2024',
            '10-01-2024',
            '11-01-2024',
            '12-01-2024',
            '01-01-2025',
        ],
        datasets: [
            // Indigo line
            {
                label: 'Current',
                data: [
                    5000, 8700, 7500, 12000, 11000, 9500, 10500, 10000, 15000, 9000, 10000, 7000, 22000, 7200, 9800, 9000, 10000, 8000, 15000, 12000,
                    11000, 13000, 11000, 15000, 17000, 18000,
                ],
                fill: true,
                backgroundColor: function (context) {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    return chartAreaGradient(ctx, chartArea, [
                        {
                            stop: 0,
                            color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0)`,
                        },
                        {
                            stop: 1,
                            color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0.2)`,
                        },
                    ]);
                },
                borderColor: tailwindConfig().theme.colors.violet[500],
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 3,
                pointBackgroundColor: tailwindConfig().theme.colors.violet[500],
                pointHoverBackgroundColor: tailwindConfig().theme.colors.violet[500],
                pointBorderWidth: 0,
                pointHoverBorderWidth: 0,
                clip: 20,
                tension: 0.2,
            },
            // Gray line
            {
                label: 'Previous',
                data: [
                    8000, 5000, 6500, 5000, 6500, 12000, 8000, 9000, 8000, 8000, 12500, 10000, 10000, 12000, 11000, 16000, 12000, 10000, 10000, 14000,
                    9000, 10000, 15000, 12500, 14000, 11000,
                ],
                borderColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.gray[500])}, 0.25)`,
                fill: false,
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 3,
                pointBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.gray[500])}, 0.25)`,
                pointHoverBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.gray[500])}, 0.25)`,
                pointBorderWidth: 0,
                pointHoverBorderWidth: 0,
                clip: 20,
                tension: 0.2,
            },
        ],
    };

    return (
        <div className="col-span-full flex flex-col rounded-xl bg-white shadow-sm dark:bg-gray-800 xl:col-span-8">
            <header className="flex items-center border-b border-gray-100 px-5 py-4 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">Analytics</h2>
            </header>
            <div className="px-5 py-1">
                <div className="flex flex-wrap max-sm:*:w-1/2">
                    {/* Unique Visitors */}
                    <div className="flex items-center py-2">
                        <div className="mr-5">
                            <div className="flex items-center">
                                <div className="mr-2 text-3xl font-bold text-gray-800 dark:text-gray-100">24.7K</div>
                                <div className="text-sm font-medium text-green-600">+49%</div>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Unique Visitors</div>
                        </div>
                        <div className="mr-5 hidden h-8 w-px bg-gray-200 dark:bg-gray-700 md:block" aria-hidden="true"></div>
                    </div>
                    {/* Total Pageviews */}
                    <div className="flex items-center py-2">
                        <div className="mr-5">
                            <div className="flex items-center">
                                <div className="mr-2 text-3xl font-bold text-gray-800 dark:text-gray-100">56.9K</div>
                                <div className="text-sm font-medium text-green-600">+7%</div>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Total Pageviews</div>
                        </div>
                        <div className="mr-5 hidden h-8 w-px bg-gray-200 dark:bg-gray-700 md:block" aria-hidden="true"></div>
                    </div>
                    {/* Bounce Rate */}
                    <div className="flex items-center py-2">
                        <div className="mr-5">
                            <div className="flex items-center">
                                <div className="mr-2 text-3xl font-bold text-gray-800 dark:text-gray-100">54%</div>
                                <div className="text-sm font-medium text-red-500">-7%</div>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Bounce Rate</div>
                        </div>
                        <div className="mr-5 hidden h-8 w-px bg-gray-200 dark:bg-gray-700 md:block" aria-hidden="true"></div>
                    </div>
                    {/* Visit Duration*/}
                    <div className="flex items-center">
                        <div>
                            <div className="flex items-center">
                                <div className="mr-2 text-3xl font-bold text-gray-800 dark:text-gray-100">2m 56s</div>
                                <div className="text-sm font-medium text-red-500">+7%</div>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Visit Duration</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Chart built with Chart.js 3 */}
            <div className="grow">
                {/* Change the height attribute to adjust the chart height */}
                <LineChart data={chartData} width={800} height={300} />
            </div>
        </div>
    );
}

export default AnalyticsCard01;
