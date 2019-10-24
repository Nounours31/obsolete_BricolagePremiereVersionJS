'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-24 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-547';
    this._commitGIT = '3669a257e5dcc4087d057465468ce3fb24f2f2a6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}