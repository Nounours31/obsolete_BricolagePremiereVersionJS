'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-02 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1193';
    this._commitGIT = '1393058206302715edd6241880b9fa04ddbea6c4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}