'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-23 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1640';
    this._commitGIT = '17257ab0451cfa56e1f11025704eb9ef8760a30a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}