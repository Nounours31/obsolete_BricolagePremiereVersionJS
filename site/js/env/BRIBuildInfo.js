'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-04 16:00:11';
    this._versionBuild = 'jenkins-Bricolage-1445';
    this._commitGIT = '7d11013296ef4e72b9b50ff3048b91934a5ee30f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}