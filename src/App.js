import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listNotes,listAdlines } from "./graphql/queries";
import './AdMetricsTable.css'; // import your CSS file here

function AdlinesTable() {
  const [adlines, setAdlines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await API.graphql(graphqlOperation(listAdlines, {limit: 10}));
        const adlinesData = apiData.data.listAdlines.items;
        setAdlines(adlinesData);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching adlines:', error);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (


    <div class="table-container">
          <h1>Ad Line Attribute</h1>

  <table>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>CFID</th>
          <th>URL</th>
          <th>Status</th>
          <th>MS SS</th>
          <th>Line Item Type</th>
          <th>Sales Vertical</th>
          <th>Advertiser Vertical</th>
          <th>Advertiser CFID</th>
          <th>Advertiser Name</th>
          <th>Service Type</th>
          <th>Advertiser Industry</th>
          <th>Advertiser Sub Industry</th>
          <th>Campaign CFID</th>
          <th>Campaign Name</th>
          <th>Campaign Goal</th>
          <th>Campaign Goal Category</th>
        </tr>
      </thead>
      <tbody>
        {adlines.map(ad => (
          <tr key={ad.dim_ad_id}>
            <td>{ad.dim_ad_id}</td>
            <td>{ad.ad_name}</td>
            <td>{ad.ad_cfid}</td>
            <td>{ad.ad_url}</td>
            <td>{ad.ad_status}</td>
            <td>{ad.ms_ss}</td>
            <td>{ad.line_item_type}</td>
            <td>{ad.sales_vertical}</td>
            <td>{ad.advertiser_vertical}</td>
            <td>{ad.advertiser_cfid}</td>
            <td>{ad.advertiser_name}</td>
            <td>{ad.service_type}</td>
            <td>{ad.advertiser_industry}</td>
            <td>{ad.advertiser_sub_industry}</td>
            <td>{ad.campaign_cfid}</td>
            <td>{ad.campaign_name}</td>
            <td>{ad.campaign_goal}</td>
            <td>{ad.campaign_goal_category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </table>

  <h1>Ad Line Measurement</h1>


  <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Ad ID</th>
          <th>Impressions</th>
          <th>Spend</th>
          <th>Clicks</th>
          <th>M2 Considerations Click</th>
          <th>Purchases</th>
          <th>Purchase Amounts</th>
          <th>Avg Max Bid</th>
          <th>Number Bid Request Eligible</th>
          <th>Number Bid Request Won In CS</th>
          <th>Number Impressions</th>
          <th>Total Impression At Max Bid</th>
          <th>Internal Win Rate</th>
          <th>External Win Rate</th>
          <th>Average Bid Amount Among Bids</th>
        </tr>
      </thead>
      <tbody>
        {adlines.map(adMetric => (
          <tr key={`${adMetric.dim_date}-${adMetric.dim_ad_id}`}>
            <td>{adMetric.dim_date}</td>
            <td>{adMetric.dim_ad_id}</td>
            <td>{adMetric.impressions}</td>
            <td>{adMetric.spend}</td>
            <td>{adMetric.clicks}</td>
            <td>{adMetric.m2_considerations_click}</td>
            <td>{adMetric.purchases}</td>
            <td>{adMetric.purchase_amounts}</td>
            <td>{adMetric.avg_max_bid}</td>
            <td>{adMetric.number_bid_request_eligible}</td>
            <td>{adMetric.number_bid_request_won_in_cs}</td>
            <td>{adMetric.number_impressions}</td>
            <td>{adMetric.total_impression_at_max_bid}</td>
            <td>{adMetric.internal_win_rate}</td>
            <td>{adMetric.external_win_rate}</td>
            <td>{adMetric.average_bidamount_among_bids}</td>
          </tr>
        ))}
      </tbody>
    </table>
</div>



  );
}

export default function App() {
  return (
    <div>
      <h1>Adlines</h1>
      <AdlinesTable />
    </div>
  );
}
