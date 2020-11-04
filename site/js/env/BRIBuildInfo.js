'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-04 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2055';
    this._commitGIT = '5f32391f2149f96aa1043d78a70d92f8ade59805';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}