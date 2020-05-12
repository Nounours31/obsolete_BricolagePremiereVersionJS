'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-12 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1352';
    this._commitGIT = 'ca774814bb77a9d453b5f63a0261cbc80462164b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}