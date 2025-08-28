import React from 'react';
import type { OutputType, CompressionOptions } from '../types';

interface CompressionOptionsProps {
  options: CompressionOptions;
  outputType: OutputType;
  onOptionsChange: (options: CompressionOptions) => void;
  onOutputTypeChange: (type: OutputType) => void;
}

export function CompressionOptions({
  options,
  outputType,
  onOptionsChange,
  onOutputTypeChange,
}: CompressionOptionsProps) {
  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          输出格式
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {(['avif', 'jpeg', 'jxl', 'png', 'webp'] as const).map((format) => (
            <button
              key={format}
              className={`px-4 py-2 rounded-md text-sm font-medium uppercase ${
                outputType === format
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => onOutputTypeChange(format)}
            >
              {format}
            </button>
          ))}
        </div>
      </div>

      {outputType !== 'png' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            压缩质量: {options.quality}%
          </label>
          <input
            type="range"
            min="1"
            max="100"
            value={options.quality}
            onChange={(e) =>
              onOptionsChange({ quality: Number(e.target.value) })
            }
            className="w-full"
          />
        </div>
      )}
    </div>
  );
}
