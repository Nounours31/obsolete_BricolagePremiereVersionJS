'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-26 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1902';
    this._commitGIT = '4281660efb56ff1923fc5724ae00ad3d1bb1c27a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}