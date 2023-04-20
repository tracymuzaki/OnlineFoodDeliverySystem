"""second migration

Revision ID: a02077a6b72b
Revises: 3fd2c311dfba
Create Date: 2023-04-17 15:23:19.593632

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a02077a6b72b'
down_revision = '3fd2c311dfba'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('sub_categories', schema=None) as batch_op:
        batch_op.add_column(sa.Column('image', sa.String(length=255), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('sub_categories', schema=None) as batch_op:
        batch_op.drop_column('image')

    # ### end Alembic commands ###