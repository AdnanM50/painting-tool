'use client';
import { useSelector, useDispatch } from 'react-redux';

import { COLORS, MENU_ITEMS } from "@/costant";
import { changeBrushSize, changeColor } from '@/lib/toolboxSlice';
import { socket } from '@/soket';

const Toolbox = () => {
    const dispatch = useDispatch();
    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
    const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
    const showBrushToolOption = activeMenuItem === MENU_ITEMS.PENCIL || activeMenuItem === MENU_ITEMS.ERASER;
    const { color, size } = useSelector((state) => state.toolbox[activeMenuItem]);

    const updateBrushSize = (e) => {
        dispatch(changeBrushSize({ item: activeMenuItem, size: e.target.value }));
        socket.emit('changeConfig', { color, size: e.target.value });
    };

    const updateColor = (newColor) => {
        dispatch(changeColor({ item: activeMenuItem, color: newColor }));
        socket.emit('changeConfig', { color: newColor, size });
    };

    return (
        <div className="p-5 absolute top-1/4 left-5 w-64 rounded-md shadow border bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:shadow-lg">
            {showStrokeToolOption && (
                <div className="mb-5">
                    <h4 className="text-xs text-gray-600 dark:text-gray-400">Stroke Color</h4>
                    <div className="flex justify-between mt-2">
                        {Object.values(COLORS).map((colorValue) => (
                            <div
                                key={colorValue}
                                className={`h-5 w-5 mr-1 rounded-sm cursor-pointer hover:border-1.5 hover:border-gray-300 hover:shadow active:shadow-md ${
                                    color === colorValue ? 'border-1.5 border-gray-300 shadow-md' : ''
                                }`}
                                style={{ backgroundColor: colorValue }}
                                onClick={() => updateColor(colorValue)}
                            />
                        ))}
                    </div>
                </div>
            )}
            {showBrushToolOption && (
                <div className="mb-5">
                    <h4 className="text-xs text-gray-600 dark:text-gray-400">Brush Size</h4>
                    <div className="flex justify-between mt-2">
                        <input
                            type="range"
                            min={1}
                            max={10}
                            step={1}
                            onChange={updateBrushSize}
                            value={size}
                            className="w-full cursor-pointer"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Toolbox;
