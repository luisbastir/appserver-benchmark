class MainController < ApplicationController

  def helloworld
    render json: {'message': 'Hello World!'}
  end

  def list
    @array_list = []
    for i in 0..500
      @item = {'index': i, 'message': "Item #{i + 1} with index #{i}"}
      @array_list << @item
    end
    render json: @array_list
  end

  def fibonacci
    @array_list = []
    for i in 0..100
      @array_list << fib(i)
    end
    render json: @array_list
  end

  private
  def fib(num)
    if num == 0
      return 0
    end
    @i = 2
    @sequence = [1,1]
    while @i < num do
      @sequence[@i] = @sequence[@i-1] + @sequence[@i-2]
      @i += 1
    end
    @sequence[num - 1]
  end
end