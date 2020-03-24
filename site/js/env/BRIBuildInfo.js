'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-24 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-1158';
    this._commitGIT = '286720765a8282e48b48dfc191f33a563fb5f7a2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}