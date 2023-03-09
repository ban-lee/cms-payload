import React from 'react';

interface Dates {
  start?: string;
  end?: string;
  startCn?: string;
  endCn?: string;
  estimatedStart?: string;
};

function toUTCDate(date: string | undefined): string {
  if (!date) return '';

  return new Date(date).toISOString().split('T')[0];
}

export function DateSummary(props): React.ReactElement {
  const {cellData}: {cellData: Dates} = props;

  const estimatedStart = React.useRef(toUTCDate(cellData.estimatedStart)).current;
  const start = React.useRef(toUTCDate(cellData.start)).current;
  const end = React.useRef(toUTCDate(cellData.end)).current;
  const startCn = React.useRef(toUTCDate(cellData.startCn)).current;
  const endCn = React.useRef(toUTCDate(cellData.endCn)).current;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div>Tentative: {estimatedStart}</div>
      {startCn && (
        <div>
          CN: {startCn} {endCn && (`- ${endCn}`)}
        </div>
      )}
      {start && (
        <div>
          EN: {start} {end && (`- ${end}`)}
        </div>
      )}
    </div>
  );
}
