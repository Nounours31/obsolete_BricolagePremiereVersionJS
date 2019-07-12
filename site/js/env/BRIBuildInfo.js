'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 12:38:06';
    this._versionBuild = 'jenkins-Bricolage-121';
    this._commitGIT = '9acb878c4faccc11a6dc810e16079257625b05cd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}