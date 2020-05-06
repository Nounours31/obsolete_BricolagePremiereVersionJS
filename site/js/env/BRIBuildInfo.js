'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-06 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1327';
    this._commitGIT = '14202c562bece3ef131ed20c7e84543f4522f35f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}