import React from 'react'
import { WindowControls } from '../components'
import WindowWrapper from '../hoc/WindowWrapper'
import { ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, Search, Share, ShieldHalf } from 'lucide-react'
import { blogPosts } from '../constants'

const Safari = () => {
  return (
    <div className="flex flex-col h-full w-full">
        {/* Header Section: Fixed at the top */}
        <div id="window-header" className="flex-none">
            <WindowControls target="safari" />
            <PanelLeft className='ml-10 icon' />

            <div className='flex items-center gap-1 ml-5'>
                <ChevronLeft className='icon' />
                <ChevronRight className='icon' />
            </div>

            <div className='flex-1 flex-center gap-3'>
                <ShieldHalf className='icon' />
                <div className='search'>
                    <Search className='icon' />
                    <input
                        type="text"
                        placeholder='Search or enter website name'
                        className='flex-1'
                    />
                </div>
            </div>

            <div className='flex items-center gap-5'>
                <Share className="icon" />
                <Plus className="icon" />
                <Copy className="icon" />
            </div>
        </div>

        {/* Content Section: Fills remaining space and scrolls */}
        <div className='blog flex-1 overflow-y-auto p-5'>
            <h2 className="mb-4 text-2xl font-bold">My Resume</h2>
            <div className='h-[calc(100%-3rem)] w-full bg-white rounded'>
                <iframe src="/files/Vure_Sathvik_Resume.pdf" title="Resume" className="w-full h-full border-none rounded" />
            </div>
        </div>  
    </div>
  )
}

const SafariWindow = WindowWrapper(Safari, 'safari');

export default SafariWindow;