"use client"
import * as Tooltip from "@radix-ui/react-tooltip";
export default function CardBubble() {
  return (
    <Tooltip.Provider>
		<Tooltip.Root>
			<Tooltip.Trigger >  
        <button className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300">
          Hover me
        </button>
            </Tooltip.Trigger>
            
			<Tooltip.Portal>
				<Tooltip.Content
                    side="left"
                    className="bg-gray-900 text-hite px-3 py-1 rounded text-sm">
                        Ver carrito
					<Tooltip.Arrow />
				</Tooltip.Content>
			</Tooltip.Portal>
		</Tooltip.Root>
	</Tooltip.Provider>
  );
}