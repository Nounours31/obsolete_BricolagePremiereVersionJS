'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-29 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-568';
    this._commitGIT = '886451992dffda7f2816e97433957734b65edbb7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}