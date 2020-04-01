'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-01 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1190';
    this._commitGIT = '867c0f4625828d67a555456a53c8e3948a258fd7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}