namespace Day5
{
	class Calc
	{
		//Method overloading concept
		public string Sum(int x, int y)
		{
			int totalValue = x + y;
			return $"Sum of {x} and {y} equals = {total}";
		}
		public string Sum(string a, string b)
		{
			string fullName = a + " " + b;
			return $"The full name is: {fullName}";
		}

		public string Sub(int x, int y)
		{
			int subValue = x - y;
			return $"Subtraction of {x} and {y} equals = {subValue}";
		}
		public string Sub(int y)
		{
			int subValue = 0 - y;
			return $"Only one value was passed, so it's subtracted from zero equalling = {subValue}";
		}

		public string Mul(int x, int y)
		{
			int multiValue = x * y;
			return $"Multiplication of {x} and {y} equals = {multiValue}";
		}
		public string Mul(int x)
		{
			return $"Only one value was passed, so it's zero time {x} equalling = zero";
		}

		public string Div(int x, int y)
		{
			int diviValue = x / y;
			return $"Division of {x} by {y} equals = {diviValue}";
		}
		public string Div(int y)
		{
			return $"Only one value was passed, so it's zero over {y} equalling = zero";
		}
	}

	class Question
	{
		//Property concept
		public string Header { get; set; }
		public string Body { get; set; }
		public int Mark { get; set; }

		//Method override concept
		public virtual string Show()
		{
			int total = 0;
			int[] Answers { 15, 28, 73 }
			for (int i = 0, i < Answers.Length; i++)
			{
				Console.WriteLine($"Type ({Header})\nQuestion({Body})\nMark({Mark})\n");
				int questAnswer = int.Parse(Console.ReadLine());
				if (questAnswer = Answers[i])
				{
					Console.WriteLine("You got that right, keep it up!\n");
					total += Mark;
				}
				else
				{
					Console.WriteLine("You got that wrong.\n");
					total += 0;
				}
			}
			
			return $"You got {total}";
		}

		//Constructor overloading concept
		public Question()
		{
			return $"No questions were answered, you got zero";
		}
		public Question(string header, string body, int mark)
		{
			this.Header = header;
			this.Body = body;
			this.Mark = mark;
		}
	}

	//Inheritance concept
	class MCQ: Question
	{
		public string[] Choices { get; set; }

		public MCQ()
		{
		}
		//Constructor chaining concept
		public MCQ(string header, string body, int mark, string[] choices): base(header, body, mark)
		{
			this.Choices = choices;
		}

		public override string Show()
		{
		}
	}

	internal class Program
	{
		static void Main(string[] args)
		{
		}
	}
}
