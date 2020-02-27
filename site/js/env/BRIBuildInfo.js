'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-27 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1054';
    this._commitGIT = '716ca73cdedf8ecb5f177eb1589b6abd075cf39c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}