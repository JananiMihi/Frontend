/*import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
	title: 'Full Auth | Home',
	description: 'Full Auth home page',
};

export default function Page() {
	return (
		<main className='bg-white'>
			
			<div className='relative isolate px-6 pt-14 lg:px-8'>
				<div className='mx-auto max-w-2xl py-10 sm:py-48 lg:py-56'>
					<div className='text-center'>
					
						<h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
							Welcome to plagarisam detector
						</h1>
						<div className="flex justify-center">
                        <Image
                         src="/ComputerScienceHeader_secondary2.jpg" // Path to your image
                         alt="My Image"
                         width={500}  // Desired width
                         height={300} // Desired height
                         className="rounded-lg"
                         />
                        </div>
						<p className='mt-4 text-lg leading-8 text-gray-600'>
						Identify when AI writing tools such as ChatGPT or AI 
						paraphrasing tools (text spinners) may have been used in
						submitted work.

                        AI writing and paraphrasing detection is available to detector
                        Feedback Studio, Plagarisam detector Similarity and Originality 
						Check customers when licensing Turnitin Originality with their 
						existing product.
						</p>
						<div className='mt-10 flex items-center justify-center gap-x-6'>
							<Link
								href='/auth/login'
								className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
							>
								Log into your account
							</Link>
							<Link
								href='/auth/register'
								className='text-sm font-semibold leading-6 text-gray-900'
							>
								Or create an account{' '}
								<span aria-hidden='true'>&rarr;</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}*/
import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
	title: 'Full Auth | Home',
	description: 'Full Auth home page',
};

export default function Page() {
	return (
		<main className='bg-white'>
			<div className='relative isolate px-6 pt-14 lg:px-8'>
				<div className='mx-auto max-w-2xl py-20 sm:py-32 lg:py-2'> {/* Adjusted padding */}
					<div className='text-center'>
						<h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
							Welcome to plagiarism detector
						</h1>
						<div className="flex justify-center">
							<Image
								src="/ComputerScienceHeader_secondary2.jpg" // Path to your image
								alt="My Image"
								width={500}  // Desired width
								height={300} // Desired height
								className="rounded-lg"
							/>
						</div>
						<p className='mt-6 text-lg leading-8 text-gray-600'> {/* Reduced margin-top */}
							Identify when AI writing tools such as ChatGPT or AI 
							paraphrasing tools (text spinners) may have been used in
							submitted work.
						</p>
						<p className='mt-6 text-lg leading-8 text-gray-600'> {/* Additional paragraph for spacing */}
							AI writing and paraphrasing detection is available to detector
							Feedback Studio, Plagiarism detector Similarity and Originality 
							Check customers when licensing Turnitin Originality with their 
							existing product.
						</p>
						<div className='mt-6 flex items-center justify-center gap-x-6'> {/* Adjusted margin-top */}
							<Link
								href='/auth/login'
								className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
							>
								Log into your account
							</Link>
							<Link
								href='/auth/register'
								className='text-sm font-semibold leading-6 text-gray-900'
							>
								Or create an account{' '}
								<span aria-hidden='true'>&rarr;</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

