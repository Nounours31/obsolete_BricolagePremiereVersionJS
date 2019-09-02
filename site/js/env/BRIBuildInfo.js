'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-02 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-342';
    this._commitGIT = 'd921baf0b6992364fea975b96e8de8de18713b80';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}