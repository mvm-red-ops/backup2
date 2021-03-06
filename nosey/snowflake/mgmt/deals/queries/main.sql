-- DEALS WITH ALL INFORMATUON BY PARTNER
SELECT d.id, p.name as partner, pl.name  as platform, dt.name as deal_type, d.territoryids, d.channelIds FROM Deals d 
JOIN PARTNERS p ON p.id =d.PARTNERID 
JOIN PLATFORMS pl ON pl.id =d.PLATFORMID
JOIN TYPES dt ON dt.id =d.DEALTYPEID 
WHERE p.name = 'Pluto'



-- DEALS WITH INDIVIDUAL TERRITORY IDS
SELECT 
name as deal_name,
value
FROM DEALS,
lateral flatten(input => territoryIds);


-- DEALS WITH PARTNER NAMES
SELECT * FROM DEALS d 
JOIN  PARTNERS p ON (p.id = d.partnerid )
WHERE p.name = 'Pluto'
 

 

SELECT * FROM territories
SELECT * FROM channels
SELECT * FROM partners
SELECT * FROM platforms





SELECT 
name, value as deal_name
FROM DEALS d,
lateral flatten(input => territoryIds);



-- UPDATE LOAD TEMPALTES
UPDATE DEALS d
SET d.LOAD_TEMPLATE_ID = null
FROM PARTNERS p
WHERE p.id != d.partnerid AND  p.name = 'Pluto'

