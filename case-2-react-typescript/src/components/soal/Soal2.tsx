
import Table from 'react-bootstrap/Table';
import Header from '../header/Header';
type IComment = {
    commentId: number;
    commentContent: string;
    replies?: IComment[];
}
const comments: IComment[] = 
    [
        {
            commentId: 1,
            commentContent: 'Hai',
            replies: 
                [
                    {   
                        commentId: 11,
                        commentContent: 'Hai juga',
                        replies: 
                            [
                                {
                                    commentId: 111,
                                    commentContent: 'Haai juga hai jugaa'
                                },
                                {
                                    commentId: 112,
                                    commentContent: 'Haai juga hai jugaa'
                                }
                            ]
                    },
                    {
                        commentId: 12,
                        commentContent: 'Hai juga',
                        replies: 
                            [
                                {
                                    commentId: 121,
                                    commentContent: 'Haai juga hai jugaa'
                                }
                            ]
                    }
                ]
        },
        {   
            commentId: 2,
            commentContent: 'Halooo'
        }
    ]
function getComentJumlah() {
    let jumlahComment = 0;
    comments.forEach((element) => {
        element.replies?.forEach(elemen2 => {
            elemen2.replies?.forEach(() => {
                jumlahComment++;
            })
            jumlahComment++;
        });
        jumlahComment++;
    }) 
    return jumlahComment;
}

let comment = getComentJumlah();


function Soal2 () {
  return (
    <div> 
        <Header/>
        <div className="container">
            <Table striped bordered hover className="mt-5">
                <thead>
                    <tr>
                        <th>Soal</th>
                        <th>Jawaban</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p>5. Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua
                                balasan komentar. Berdasarkan data di atas, total komentar adalah 7 komentar.
                            </p>
                        </td>
                        <td>
                            <p>{comment}
                            </p>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </div>
  );
}
export default Soal2;
