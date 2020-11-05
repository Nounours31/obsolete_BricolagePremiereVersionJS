'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-05 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-2061';
    this._commitGIT = '06e279177565bd385e8773dba1963c579263b88a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}