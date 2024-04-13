import React from 'react';
import Icon from '@mdi/react';
import { mdiCurrencyUsd, mdiTrendingUp } from '@mdi/js';

const SummaryCard = ({ title, icon, value, delta, color }) => {
  return (
    <div className="flex flex-col bg-[#312d4b] w-[45%] p-2 rounded-md ">
      <div className="flex items-center justify-between mb-4">
        <div className="avatar">
          <div style={{
            backgroundColor:color
          }} className={` rounded-full p-1  shadow `}>
            {icon}
          </div>
        </div>
        {/* <div className="dropdown flex w-full justify-between gap-2 ">
          <button
            className="btn p-0"
            type="button"
            id={`dropdown-${title}`}
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="mdi mdi-dots-vertical mdi-24px"></i>
          </button>
          <div
            className="dropdown-menu flex w-full justify-between items-center dropdown-menu-end"
            aria-labelledby={`dropdown-${title}`}
          >
            <a className="dropdown-item waves-effect" href="javascript:void(0);">
              Refresh
            </a>
            <a className="dropdown-item waves-effect" href="javascript:void(0);">
              Share
            </a>
            <a className="dropdown-item waves-effect" href="javascript:void(0);">
              Update
            </a>
          </div>
        </div> */}
      </div>
      <h6 className="mb-2 text-lg font-medium ">{title}</h6>
      <div className="flex flex-wrap mb-2 pb-1 gap-2 items-center">
        <h4 className="mb-0">{value}</h4>
        <small style={{
            color:color
        }} className={`text-${color} mt-1`}>{delta}</small>
      </div>
      <small>{`Daily ${title}`}</small>
    </div>
  );
};

const SummaryCards = () => {
  return (
    <div className="flex flex-wrap w-[50%] gap-3 p-2 text-[#d4d4d4d2]  justify-between">
      <SummaryCard
        title="Transactions"
        icon={<Icon path={mdiTrendingUp} size={1} color={'white'} />}
        value="1.2k"
        delta="+38%"
        color="#5356FF"
      />
      <SummaryCard
        title="Revenue"
        icon={<Icon path={mdiCurrencyUsd} size={1} color={'white'} />}
        value="$95.2k"
        delta="+12%"
        color="#74E291"
      />
    </div>
  );
};

export default SummaryCards;