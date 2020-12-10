'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-10 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-2202';
    this._commitGIT = '764d24c5b8ac135c316ba1e13ef24756906f876c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}